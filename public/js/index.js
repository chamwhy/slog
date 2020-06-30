function reset() {
  for (let i = 0; i < 5; i++) {}
}

function init() {
  reset();
}
init();

const utils = {};

utils.getUserInfo = () => {
  //get user info
  const user = {
    username: "chamwhy",
    lv: 4,
    exp: 69,
    followings: 34,
    followers: 52,
  };
  return user;
  
};

utils.fillSlider = (user) => {
  const expslider = document.querySelector("#expslider");
  let slider = document.createElement("canvas");
  const ctx = slider.getContext("2d");
  ctx.canvas.width = 100;
  ctx.canvas.height = 20;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 20);
  ctx.fillStyle = "rgb(225, 100, 100)";
  ctx.fillRect(0, 0, (500 / 100) * user.exp, 20);
  expslider.appendChild(slider);
};
utils.fillSlider(utils.getUserInfo());
