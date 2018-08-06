const { compose } = require("react-app-rewired");

module.exports = (config, env) => {
  const rewires = compose(
    require("react-app-rewire-styled-components"),
    require("react-app-rewire-hot-loader"),
    require("react-app-rewire-polished"),
    require("react-app-rewire-preload-plugin"),
    require("react-app-rewire-svg-react-loader")
  );
  return rewires(config, env);
};
