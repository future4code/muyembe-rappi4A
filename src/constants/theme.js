import { createMuiTheme } from '@material-ui/core/styles';
import { primary, textColor, textGeneralColor } from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
        main: primary,
        contrastText: textColor
    },
    text: {
        primary: textGeneralColor
    }
  },
})

export default theme