const COLORS = {
    white: "#FFF",
    catton: "#C67C4E",
    grey: "#A9A9A9",
    dark_grey: "#313131",
    light_grey: "#DDD",
    light_black: "#2F2D2C",
    lighter_grey: "#9B9B9B",

    home_gradient_bgcolor: "linear-gradient(241deg, #131313 0%, #313131 100%)",
    onboard_gradient_bgcolor: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 23.67%)"
}

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  };
  
  const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };
  
  export { COLORS, SIZES, SHADOWS };