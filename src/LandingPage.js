import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const LandingPage = () => {
  const [userAccounts, setUserAccounts] = useState([]);
  useEffect(() => {
    axios.get("https://panorbit.in/api/users.json").then((response) => {
      setUserAccounts(response.data.users);
      console.log(response.data.users);
    });
  }, []);
  if (!userAccounts) return null;
  return (
    <div  className="">
      <Card className="card text-center mx-auto card overflow-auto" >
        <Card.Header className="header" style={{padding:"2rem"}}><h2>Select an account</h2></Card.Header>
        {userAccounts &&
          userAccounts.length > 0 &&
          userAccounts.map((user) => (
            <ListGroup variant="flush" >
              <img src={user.profilepicture} className="img rounded-circle" alt=""/>
              <ListGroup.Item>
                <Link
                  to={`/user/${user.id}`}
                  state={{
                    name: user.name,
                    profilepicture:user?.profilepicture,
                    username: user?.username,
                    email: user?.email,
                    address: user?.address,
                    phone: user?.phone,
                    website: user?.website,
                    companyName: user?.company.name,
                    catchPhrase: user?.company.catchPhrase,
                    bs: user?.company.bs,
                    street:user?.address.street,
                    suite:user?.address.suite,
                    city:user?.address.city,
                    zipcode:user?.address.zipcode,
                    lat:user?.address.geo.lat,
                    lng:user?.address.geo.lng,

                  }}
                  className="card-link Link"
                >
                  <h3>{user.name}</h3>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          ))}
      </Card>
    </div>
  );
};

export default LandingPage;
