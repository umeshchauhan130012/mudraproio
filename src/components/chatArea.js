import React from "react";
import { useState, useEffect, useRef } from "react";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { supportChatDetails, supportTicketDetails, supportTicketReply } from "../redux/actions/support";
import stylesD from "../styles/dashboard.module.css";
import stylesP from "../styles/profile.module.css";

const ChatArea = ({ active, ticketId, ticketSubject, ticketCategory }) => {
  const num = 1;
  const messagesEndRef = useRef(null);
  const [chatInput, setChatInput] = useState("");
  const [chatData, setChatData] = useState("");
  const [datareloade, setDatareloade] = useState(num);
  const [chatDetailsData, setChatDetailsData] = useState("");
  const status = useSelector((state) => state);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (chatInput === "") {
      return;
    }
    if(chatInput && ticketId) {
      let apiData = {
        Message : chatInput,
        TicketId : ticketId,
        CategoryName : ticketCategory,
        Subject : ticketSubject,
    };
      dispatch(supportTicketReply(apiData));
      setChatInput("");
      reloadedate(num);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 1000);
  }, [active]);

  useEffect(() => {
    const apiData = {
      TicketId : ticketId
    };
    dispatch(supportTicketDetails(apiData));
  }, [ticketId]);


  useEffect(() => {
    if (status.ticketDetails.data !== "") {
      if (status.ticketDetails.data.data.message === "success") {
        setChatData(status.ticketDetails.data.data.result);
      }
    }
  }, [status]);

  const reloadedate = () => {
    setTimeout(() => {
      setDatareloade(datareloade + 1);
    }, 2000);
  }

  useEffect(() => {
    const apiData = {
      TicketId : ticketId
    };
    dispatch(supportChatDetails(apiData));
  }, [ticketId, datareloade]);

  useEffect(() => {
    if (status.ChatDetails.data !== "") {
      if (status.ChatDetails.data.data.message === "success") {
        setChatDetailsData(status.ChatDetails.data.data.result);
      }
    }
  }, [status]);

  return (
    <>
      {" "}
      <div className={` ${stylesD.messageArea}`}>
        <div>
          <div
            className={`${stylesD.messageHeader} ${stylesP.flex} ${stylesP.spaceBetween}`}
          >
              <div className={stylesD.width5}>
                <div className={stylesD.chatdt}>{chatData.catName}</div>
                <div className={stylesD.chatsub}>{chatData.subject}</div>
              </div>
              <div className={stylesD.width5}>
                <div className={stylesD.chatstu}>{chatData.status}</div>
                <div className={stylesD.chitid}>REF {chatData.ticketId}</div>
              </div>
          </div>
          <div className={stylesD.underLine} />
          <div className={stylesD.messagebody}>
            {chatDetailsData && chatDetailsData.map((item, index) => (
              <div className={stylesD.yourMessageitem} key={index}>
              {item.usertype === "Admin" ?
                <div className={stylesD.yourMessage}>
                {item.message ? <span>{item.message}<em><Moment format="DD-MM-YYYY h:m A" date={item.date}></Moment></em></span> : '' }
              </div> : '' }
              {item.usertype === "user" ? 
              <div className={stylesD.myMessage}>
                {item.message ? <span>{item.message}<em><Moment format="DD-MM-YYYY h:m A" date={item.date}></Moment></em></span> : '' }
              </div> : '' }
            </div>
            ))}
{/* <div className="">
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
<div className={stylesD.myMessage}>
  <span>hello<em><Moment format="DD-MM-YYYY h:m A" date=""></Moment></em></span>
</div>
</div> */}

            <div ref={messagesEndRef} />
          </div>
          <div className={`${stylesD.messagebottom} ${stylesP.messagebottom}`}>
            <div className={`${stylesP.flex} ${stylesP.spaceBetween} ${stylesP.flexnowrp}`}>
              <div
                className={`${stylesP.profileinput} ${
                  stylesP.profileinputchat
                } ${"input_item"}`}
              >
                <input
                  className={stylesD.messagetypebox}
                  onChange={(e) => setChatInput(e.target.value)}
                  name="chat"
                  value={chatInput}
                />
              </div>
              <div
                className={`secondry_dark_btn ${stylesD.messageInput}`}
                onClick={handleSubmit}
              >
                SEND
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
