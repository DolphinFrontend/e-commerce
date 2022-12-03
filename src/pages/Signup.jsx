import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Form, FormGroup, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { storage } from "../firebase";
import { db } from "../firebase";
import  {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";


const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadUrl) => {
              //update user Profile
              await updateProfile(user, {
                displayName: userName,
                photoURL: downloadUrl,
              });

              // store user data in firebase database
              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: userName,
                email,
                photoURL: downloadUrl,
              });
            }
          );
        }
      );


      setLoading(false)
      toast.success("Account created")
      navigate("/login")
    
    
    } catch (error) {
      setLoading(false)
      toast("Something is wrong");
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
           {
            loading? (
              <Col lg="12" className="text-center"><h5 className="fw-bold">Loading...</h5> </Col>
            ) : ( 
              <Col lg="6 " className="m-auto text-center mt-5">
              <h3 className="mt-4 fw-bold">Signup</h3>

              <Form className="auth_form mt-5" onSubmit={signup}>
                <FormGroup className="form_group">
                  <input
                    type="userName"
                    placeholder="Enter your email"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="file" onClick={(e) => setFile(e.target.value)} />
                </FormGroup>
                <button className="buy_btn auth_btn">Create</button>

                <p>
                  {" "}
                  Already have an account
                  <Link to="/login">Create an account</Link>
                </p>
              </Form>
            </Col>
            )
           }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
