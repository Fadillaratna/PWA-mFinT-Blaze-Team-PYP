import React, { Component } from 'react';
// import './Planner.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { BsFillChatDotsFill, BsArrowLeft } from 'react-icons/bs'
import { BiX, BiSend } from "react-icons/bi";


class Robobot extends Component {
    render() {
        $(function () {
            var INDEX = 0;
            $("#chat-submit").click(function (e) {
                e.preventDefault();
                var msg = $("#chat-input").val();
                if (msg.trim() == '') {
                    return false;
                }
                generate_message(msg, 'self');
                var buttons = [
                    {
                        name: 'Existing User',
                        value: 'existing'
                    },
                    {
                        name: 'New User',
                        value: 'new'
                    }
                ];
                setTimeout(function () {
                    generate_message(msg, 'user');
                }, 1000)

            })

            function generate_message(msg, type) {
                INDEX++;
                var str = "";
                str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
                str += "          <span class=\"msg-avatar\">";
                str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
                str += "          <\/span>";
                str += "          <div class=\"cm-msg-text\">";
                str += msg;
                str += "          <\/div>";
                str += "        <\/div>";
                $(".chat-logs").append(str);
                $("#cm-msg-" + INDEX).hide().fadeIn(300);
                if (type == 'self') {
                    $("#chat-input").val('');
                }
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
            }

            function generate_button_message(msg, buttons) {
                /* Buttons should be object array 
                  [
                    {
                      name: 'Existing User',
                      value: 'existing'
                    },
                    {
                      name: 'New User',
                      value: 'new'
                    }
                  ]
                */
                INDEX++;
                var btn_obj = buttons.map(function (button) {
                    return "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\"" + button.value + "\">" + button.name + "<\/a><\/li>";
                }).join('');
                var str = "";
                str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg user\">";
                str += "          <span class=\"msg-avatar\">";
                str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
                str += "          <\/span>";
                str += "          <div class=\"cm-msg-text\">";
                str += msg;
                str += "          <\/div>";
                str += "          <div class=\"cm-msg-button\">";
                str += "            <ul>";
                str += btn_obj;
                str += "            <\/ul>";
                str += "          <\/div>";
                str += "        <\/div>";
                $(".chat-logs").append(str);
                $("#cm-msg-" + INDEX).hide().fadeIn(300);
                $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
                $("#chat-input").attr("disabled", true);
            }

            $(document).delegate(".chat-btn", "click", function () {
                var value = $(this).attr("chat-value");
                var name = $(this).html();
                $("#chat-input").attr("disabled", false);
                generate_message(name, 'self');
            })

            $("#chat-circle").click(function () {
                $("#chat-circle").toggle('scale');
                $(".chat-box").toggle('scale');
            })

            $(".chat-box-toggle").click(function () {
                $("#chat-circle").toggle('scale');
                $(".chat-box").toggle('scale');
            })

        })

        return (
            <div>
                <div className="con"><br />
                    <div className="row me-4 ms-4 mb-4">
                        <div className="col-2">
                            <NavLink className="a" to="/"><BsArrowLeft className='arrow-left' /></NavLink>
                        </div>
                        <div className="col-6">
                            <h4 className='title mt-1'>RoboBot</h4>
                        </div>
                        
                    </div>

                    <div id="chat-circle" className="btn btn-raised">
                        <div id="chat-overlay"></div>
                        <BsFillChatDotsFill size={30} />
                    </div>

                    <div className="chat-box">
                        <div className="chat-box-header text-center">
                            RoboBot
                            <span className="chat-box-toggle"><BiX size={25} /></span>
                        </div>
                        <div className="chat-box-body">
                            <div className="chat-box-overlay">
                            </div>
                            <div className="chat-logs">

                            </div>
                        </div>
                        <div className="chat-input">
                            <form>
                                <input type="text" id="chat-input" placeholder="Send a message..." />
                                <button type="submit" className="chat-submit" id="chat-submit"><BiSend size={25} /></button>
                            </form>
                        </div>
                    </div>




                </div>
            </div>
        );
    }
}

export default Robobot;