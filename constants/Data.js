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

export const data = [
    {nama: "shafwan", tanggal: "2 September 2023", category: "Hadir"},
    {nama: "ongko", tanggal: "6 September 2023", category: "Hadir"},
    {nama: "mingki", tanggal: "6 September 2023", category: "Hadir"},
    {nama: "ong", tanggal: "4 September 2023", category: "Hadir"},

    {nama: "ein", tanggal: "1 September 2023", category: "Sakit"},
    {nama: "ien", tanggal: "3 September 2023", category: "Sakit"},
    {nama: "risa", tanggal: "6 September 2023", category: "Sakit"},

    {nama: "ali", tanggal: "2 September 2023", category: "Izin"},
    {nama: "asril", tanggal: "5 September 2023", category: "Izin"},
    {nama: "cika", tanggal: "4 September 2023", category: "Izin"},
]

export const imagesDataURL = [
    'https://i.ibb.co/v1xMtzZ/Mobil1.jpg'
]

export const imageData = [
    'https://i.ibb.co/7Yn5vns/People1.jpg'
]