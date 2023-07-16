import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <>
      <div className="dashboard p-3 mt-3">
        <div className="container">
          <h2 className="pb-2 fw-bold mb-3">Dashboard</h2>

          <div className="row gy-4 mt-4">
            <div className="col-lg-6">
              <div className="welcome">
                <div className="content d-flex justify-content-between  p-3 rounded-top-4">
                  <div className="text">
                    <h4 className="fw-bold">Welcome</h4>
                    <p className="">Elbana</p>
                  </div>
                  <div className="img">
                    <img
                      src={require("../../images/welcome.png")}
                      className=""
                      alt="welcome"
                    />
                  </div>
                </div>
                <div className="dashboard-profile bg-white py-5">
                  <img src={require("../../images/avatar.png")} alt="person" />
                  <div className="dashboard-prfile-text mt-3 py-3">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="item text-center">
                          <h5>Mohamed Elbana</h5>
                          <p>React Developer</p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="item text-center">
                          <h5>20</h5>
                          <p>Project</p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="item text-center">
                          <h5>$8000</h5>
                          <p>Earned</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Btn">
                    <button className="btn btn-primary">Profile</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className=" Quick-Draft bg-white h-100 rounded-4">
                <div className="content p-3">
                  <div className="text">
                    <h4 className="fw-bold">Quick Draft</h4>
                    <p className="">Write A Draft For Your Ideas</p>
                  </div>
                  <div className="frm">
                    <input
                      type="text"
                      placeholder="Title"
                      className="form-control mb-3"
                    />
                    <textarea
                      className="form-control"
                      placeholder=" Your Thought"
                    ></textarea>
                  </div>
                  <div className="Btn">
                    <button className="btn btn-primary ">Save</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="yearly-target bg-white h-100 rounded-4">
                <div className="content p-3">
                  <div className="text">
                    <h4 className="fw-bold">Yearly Target</h4>
                    <p className="">Targets Of The Year</p>
                  </div>
                  <div className="earns">
                    <div className="item mb-3 d-flex">
                      <div className="icon icon-dollar d-flex justify-content-center align-items-center me-3">
                        <i className="fa fa-dollar"></i>
                      </div>
                      <div className="detail ">
                        <p className="mt-2 mb-0">Money</p>
                        <h6 className="my-1 fw-bold">$20.000</h6>
                        <div className="line line-dollar my-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="item mb-3 d-flex">
                      <div className="icon icon-code d-flex justify-content-center align-items-center me-3">
                        <i className="fa fa-code"></i>
                      </div>
                      <div className="detail">
                        <p className="mt-2 mb-0">Projects</p>
                        <h6 className="my-1 fw-bold">24</h6>
                        <div className="line line-code my-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="item d-flex">
                      <div className="icon icon-team d-flex justify-content-center align-items-center me-3">
                        <i className="fa fa-code"></i>
                      </div>
                      <div className="detail">
                        <p className="mt-2 mb-0">Projects</p>
                        <h6 className="my-1 fw-bold">24</h6>
                        <div className="line line-team my-2">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="tickets bg-white h-100 rounded-4">
                <div className="content p-3">
                  <div className="text">
                    <h4 className="fw-bold">Tickets Statistics</h4>
                    <p className="">Everything About Support Tickets</p>
                  </div>
                  <div className="support">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <div className="item item-first rounded-4 text-center py-3">
                          <i className="fa-regular fa-rectangle-list fa-2x total "></i>
                          <h3 className="fw-bold my-2">2500</h3>
                          <p>Total</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item item-second rounded-4 text-center py-3">
                          <i className="fa-solid fa-spinner fa-2x pending"></i>
                          <h3 className="fw-bold my-2">500</h3>
                          <p>Pending</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item item-third rounded-4 text-center py-3">
                          <i className="fa-regular fa-check-circle fa-2x check"></i>
                          <h3 className="fw-bold my-2">1900</h3>
                          <p>Closed</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item item-fours rounded-4 text-center py-3">
                          <i class="fa-regular fa-rectangle-xmark fa-2x delete"></i>
                          <h3 className="fw-bold my-2">100</h3>
                          <p>Deleted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="latest-news bg-white h-100 rounded-4">
                <div className="content p-3">
                  <div className="text">
                    <h4 className="fw-bold">Latest News</h4>
                  </div>
                  <div className="news">
                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="img">
                              <img
                                src={require("../../images/news-01.png")}
                                alt=""
                              />
                            </div>
                            <div className="text-news mt-2 ms-3">
                              <h3>Created SASS Section</h3>
                              <p>New SASS Examples & Tutorials</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                            <span>3 Days Ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="img">
                              <img
                                src={require("../../images/news-02.png")}
                                alt=""
                              />
                            </div>
                            <div className="text-news mt-2 ms-3">
                              <h3>Changed The Design</h3>
                              <p>A Brand New Website Design</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                            <span>5 Days Ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="img">
                              <img
                                src={require("../../images/news-03.png")}
                                alt=""
                              />
                            </div>
                            <div className="text-news mt-2 ms-3">
                              <h3>Team Increased</h3>
                              <p>3 Developers Joined The Team</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                            <span>7 Days Ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="new last-new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="img">
                              <img
                                src={require("../../images/news-04.png")}
                                alt=""
                              />
                            </div>
                            <div className="text-news mt-2 ms-3">
                              <h3>Added Payment Gateway</h3>
                              <p>Many New Payment Gateways Added</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                            <span>9 Days Ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="latest-news bg-white h-100 rounded-4">
                <div className="content p-3">
                  <div className="text">
                    <h4 className="fw-bold">Latest Tasks</h4>
                  </div>
                  <div className="news">

                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3>Record One New Video</h3>
                              <p>Record Python Create Exe Project</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3>Write Article</h3>
                              <p>Write Low Level vs High Level Languages</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                   <div className="new layers">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3 className=" text-decoration-line-through">Attend The Meeting</h3>
                              <p  className=" text-decoration-line-through">Attend The Project Business Analysis Meeting</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3>Finish Lesson</h3>
                              <p>Finish Teaching Flex Box</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="latest-news bg-white h-100 rounded-4">
                <div className="content p-3">
                  <div className="text">
                    <h4 className="fw-bold">Top Search Items</h4>
                  </div>
                  <div className="news">

                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3>Record One New Video</h3>
                              <p>Record Python Create Exe Project</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3>Write Article</h3>
                              <p>Write Low Level vs High Level Languages</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                   <div className="new layers">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3 className=" text-decoration-line-through">Attend The Meeting</h3>
                              <p  className=" text-decoration-line-through">Attend The Project Business Analysis Meeting</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="new">
                      <div className="row align-items-center gy-4">
                        <div className="col-md-9">
                          <div className="parent d-flex">
                            <div className="text-news mt-2">
                              <h3>Finish Lesson</h3>
                              <p>Finish Teaching Flex Box</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="item text-end">
                                <i class="fa-regular fa-trash-can delete"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
