import axios from "axios"
import Carmen from '@/assets/patients/carmen.jpg'
import Daniel from '@/assets/patients/daniel.jpg'
import Enrique from '@/assets/patients/enrique.jpg'
import Francisco from '@/assets/patients/francisco.jpg'
import Ivan from '@/assets/patients/ivan.jpg'
import Jose from '@/assets/patients/jose.jpg'
import Manuel from '@/assets/patients/manuel.jpg'

export const api = axios.create({
    baseURL: 'http://test.amobamed.com',
})

export const patients = [
    {
        img: Carmen,
        name: 'Carmen Alejandra Rivero Rivera',
        id: '0105254361',
        appointmentType: 'Consulta Online',
        appointmentTime: '10:00 / 11:00'
    },
    {
        img: Daniel,
        name: 'Daniel Alejandro Perez Salmeron',
        id: '0105254362',
        appointmentType: 'Consulta Online',
        appointmentTime: '11:00 / 12:00'        
    },
    {
        img: Enrique,
        name: 'Enrique José Carballo Carvajal',
        id: '0105254363',
        appointmentType: 'Consulta Online',
        appointmentTime: '12:00 / 13:00'
    },
    {
        img: Francisco,
        name: 'Francisco Josue Lopez Meza',
        id: '0105254364',
        appointmentType: 'Consulta Online',
        appointmentTime: '15:00 / 16:00'        
    },
    {
        img: Ivan,
        name: 'Ivan José Rivero Meza',
        id: '0105254365',
        appointmentType: 'Consulta Online',
        appointmentTime: '16:00 / 16:30'   
    },
    {
        img: Jose,
        name: 'José Ramón Iglesias Marcano',
        id: '0105254366', 
        appointmentType: 'Consulta Online',
        appointmentTime: '16:30 / 17:00'      
    },
    {
        img: Manuel,
        name: 'Manuel Alejandrao Iglesias Marcano',
        id: '0105254367',
        appointmentType: 'Consulta Online',
        appointmentTime: '17:00 / 17:30'  
    },
    {
        img: Carmen,
        name: 'Carmen Alejandra Rivero Rivera',
        id: '0105252361',
        appointmentType: 'Consulta Online',
        appointmentTime: '10:00 / 11:00'
    },
    {
        img: Daniel,
        name: 'Daniel Alejandro Perez Salmeron',
        id: '1105254362',
        appointmentType: 'Consulta Online',
        appointmentTime: '11:00 / 12:00'        
    },
    {
        img: Enrique,
        name: 'Enrique José Carballo Carvajal',
        id: '2105254363',
        appointmentType: 'Consulta Online',
        appointmentTime: '12:00 / 13:00'
    },
    {
        img: Francisco,
        name: 'Francisco Josue Lopez Meza',
        id: '3105254364',
        appointmentType: 'Consulta Online',
        appointmentTime: '15:00 / 16:00'        
    },
    {
        img: Ivan,
        name: 'Ivan José Rivero Meza',
        id: '4105254365',
        appointmentType: 'Consulta Online',
        appointmentTime: '16:00 / 16:30'   
    },
    {
        img: Jose,
        name: 'José Ramón Iglesias Marcano',
        id: '5105254366', 
        appointmentType: 'Consulta Online',
        appointmentTime: '16:30 / 17:00'      
    },
    {
        img: Manuel,
        name: 'Manuel Alejandrao Iglesias Marcano',
        id: '6105254367',
        appointmentType: 'Consulta Online',
        appointmentTime: '17:00 / 17:30'  
    },
]


