import { React, Fragment } from "react";
import "./message.scss";

const Message = ({ userImage, name }) => {
  return (
    <Fragment>
      <div className="message-container container">
        <div className="row">
          <div className="col-sm-12">
            <div className="message container">
              <div className="row">
                <div className="user-data col-sm-12">
                  {" "}
                  <img
                    src={userImage}
                    alt="userimage"
                    className="message-user__image"
                  />
                  <p className="message-user">{name}</p>
                </div>

                <p className="message-text col-sm-12">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  quod mollitia nihil modi atque doloremque non. Velit quidem
                  atque reprehenderit. Blanditiis ratione in rerum id, numquam
                  commodi quo. Quam, optio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Message;
