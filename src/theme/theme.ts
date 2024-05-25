import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        incomeColor: PaletteColor
        expenseColor: PaletteColor
        balanceColor: PaletteColor
    }

    interface PaletteOptions{
        incomeColor: PaletteColorOptions,
        expenseColor: PaletteColorOptions,
        balanceColor: PaletteColorOptions,
        
    }
}

export const theme = createTheme({
    typography:{
        fontFamily: 'Noto Sans JP, sans-serif',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    palette:{
        //収入用の色
        incomeColor:{
            main:'#003c6c',
            light:'#336389',
            dark:'#002a4b',
        },
        //支出用の色
        expenseColor:{
            main:'#ad8291',
            light:'#bd9ba7',
            dark:'#795b65',
        },
        //残高用の色
        balanceColor:{
            main:'#616161',
            light:'#808080',
            dark:'#434343',
        }
    }
})