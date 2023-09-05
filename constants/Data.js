import Profile from '../assets/svg/iconProfile.svg'
import Izin from '../assets/svg/iconIzin.svg'
import Sakit from '../assets/svg/iconSakit.svg'
import History from '../assets/svg/iconHistory.svg'
import Exit from '../assets/svg/iconExit.svg'
import Color from './Color'
import Hadir from '../assets/svg/iconHadir.svg'
import Terlambat from '../assets/svg/iconTerlambat.svg'

export const Data =[
    {
        btnName: "Profile",
        icon: <Profile />,
        backgroundColor:Color.Hijau
    },
    {
        btnName: "History",
        icon: <History stroke={Color.Putih}/>,
        backgroundColor:Color.Hijau
    },
    {
        btnName: "Izin",
        icon: <Izin stroke={Color.Putih} />,
        backgroundColor:Color.Hijau
    },
    {
        btnName: "Sakit",
        icon: <Sakit stroke={Color.Putih} />,
        backgroundColor:Color.Hijau
    },
    {
        btnName: "Keluar",
        icon: <Exit stroke={Color.Putih}/>,
        backgroundColor:Color.Hijau
    }
]

export const statusCount = [
    {
        status: "Hadir",
        icon: <Hadir/>,
        count: 13
    },
    {
        status: "Izin",
        icon: <Izin stroke={Color.Hijau}/>,
        count: 2
    },
    {
        status: "Sakit",
        icon: <Sakit stroke={Color.Hijau}/>,
        count: 3
    },
    {
        status: "Terlambat",
        icon: <Terlambat/>,
        count: 5
    },
]