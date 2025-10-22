import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Download, FileText, Printer, Copy, Calendar, List } from "lucide-react";
import { useNavigate } from "react-router";
import { useCustomerList } from "../../hooks/useCustomerList";

export default function CustomerPage() {
  const navigate = useNavigate();
  const { userData,  loading } = useCustomerList();
  // const [paginationModel, setPaginationModel] = useState({
  //   page: 0,
  //   pageSize: 100,
  // });
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");
  const [exportAnchor, setExportAnchor] = useState<null | HTMLElement>(null);

  const handleTabChange = (_: any, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleExportClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setExportAnchor(event.currentTarget);
  };
  const handleExportClose = () => {
    setExportAnchor(null);
  };


  const archivedCustomer = [
    {
      "_id": 230202,
      "name": "Peter Anthony  O'Toole",
      "address": "Flat 7, Jack Edwards Court, 5 Lapwing Lane, Manchester, England, M20 2NT",
      "county": "England",
      "phone": "07914003814",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 1,
      "name": "Staff   Training",
      "address": "1 Main St, London",
      "county": "",
      "phone": 123456789,
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230200,
      "name": "Pamela  Wallace",
      "address": "52 Thellwall Avenue  M14 7WF, Manchester, M14 7WF",
      "county": "",
      "phone": "07377128404",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230480,
      "name": "John  Winston Churchill",
      "address": "Flat 79, 3 Hollyhedge Court Road, Wythenshawe, Manchester, United Kingdom, M22 4ZP",
      "county": "United Kingdom",
      "phone": "07783070823, Elizabeth - 07783070823",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230630,
      "name": "Thomas  A Walker",
      "address": "12 Yew Tree Lane, Northenden , Manchester, County, M22 4DY",
      "county": "County",
      "phone": "0161 998 2234, Charlie (Son) 07789814176",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 63,
      "name": "Thomas Abrahams",
      "address": "14 Waterside Close, Chorlton, M21 7NU",
      "county": "",
      "phone": "0161 432 3514",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230227,
      "name": "Eric Acton",
      "address": "Flat 31 Tealby Court, Wilbraham Road, M21 0XB, Manchester, M21 0XB",
      "county": "",
      "phone": "0161 881 8156",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230267,
      "name": "Susan Adams",
      "address": "7 Hucclecote Avenue, M22 1AL, Manchester, M22 1AL",
      "county": "",
      "phone": "0161 498 9731, 07585 956281",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230626,
      "name": "Firdaws Ahmad",
      "address": "Longmere Centre 181 Longley Lane, Northenden, M22 4JG",
      "county": "",
      "phone": "07752 173695",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 2,
      "name": "Samir Ahmed",
      "address": "17 Norview Drive, Manchester, Lancashire,, Manchester, England, M20 5QF",
      "county": "England",
      "phone": "0161 445 6502, 07939279147 - mother",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 53,
      "name": "Neil Aitken",
      "address": "26 Colwyn Avenue, M14 6QN, Manchester, M14 6QN",
      "county": "",
      "phone": "0161 443 0403",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230674,
      "name": "Neil Aitken",
      "address": "26 Colwyn Avenue, Manchester, M14 6QN",
      "county": "",
      "phone": "0161 443 0403",
      "type": "MCC Spot",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230566,
      "name": "Javed  Akhtar",
      "address": "27 Clitheroe Road, Longsight, Manchester, M13 0GE, Manchester, M13 0GE",
      "county": "",
      "phone": "0161 224 2450, Hassan (Son) 07775988180",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230400,
      "name": "Sidney  Alexander",
      "address": "145 Craig Road, M18 7QW, Manchester, Lancashire, M18 7QW",
      "county": "Lancashire",
      "phone": "0161 223 6471",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230142,
      "name": "Amanda Carmen  Allsop",
      "address": "4 Brownley Green Cottage, M22 9TF, Manchester, Greater Manchester, M22 9TF",
      "county": "Greater Manchester",
      "phone": "0161 915 3792",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230579,
      "name": "Eustace  Alman",
      "address": "3 Ardeen Walk, Brunswick, Manchester, M13 9SP",
      "county": "",
      "phone": "07579056232, 07579056232",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230368,
      "name": "Hawraa Alsaadi",
      "address": "Flat 7, Elizabeth Yarwood Court, Kincardine Road, Manchester, Greater Manchester, M13 9SY",
      "county": "Greater Manchester",
      "phone": "07552013709, 0161 272 8809",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230148,
      "name": "Rafiq Sahira Alvi",
      "address": "59 Egerton Road North, M21 0GX, Manchester, M21 0GX",
      "county": "",
      "phone": "07405 292075",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230205,
      "name": "Pearl  Anderson",
      "address": "Ground Floor Flat 6, 31 Elmswood Avenue, M14 4TA, Manchester, M14 4TA",
      "county": "",
      "phone": "0161 989 5736, 07908157891",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230321,
      "name": "Samantha  Anderson",
      "address": "Flat 10 Foxlair Court, 38 Foxlair Road, M22 9RJ, Manchester, M22 9RJ",
      "county": "",
      "phone": "07843469947, 07981281212",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230618,
      "name": "Janet  Andrews",
      "address": "15 Lindeth Avenue, Manchester, M18 7EX",
      "county": "",
      "phone": "0161 231 1040",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230624,
      "name": "Noma Ann Carter",
      "address": "35 Woodhouse Lane, Wythenshawe, Manchester, M22 8JS",
      "county": "Manchester",
      "phone": "07759 633039",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230118,
      "name": "Mohammed Raffi Anwar",
      "address": "239 Peel Hall Road, Manchester, M22 5HE",
      "county": "",
      "phone": "0161 437 5744",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230686,
      "name": "Zoi Apostolides",
      "address": "Flat 24 Northleigh House 248 Seymour Grove , Old Trafford, M16 0DY",
      "county": "",
      "phone": "07732427625",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230313,
      "name": "Abrar Rahin Arifin",
      "address": "44 Woodend Road, Manchester, M22 9XE, Manchester, M22 9XE",
      "county": "",
      "phone": "07583798461",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 46,
      "name": "Peter Arnoutis",
      "address": "15 Eddisbury Avenue, Urmston, M41 8GE",
      "county": "",
      "phone": "0161 747 6255",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230121,
      "name": "Jacqueline Norma Ashcroft",
      "address": "Flat 19, Boat Lane Court, 34 Brett Street, M22 4EZ, Manchester, M22 4EZ",
      "county": "",
      "phone": "0161 218 8047",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230123,
      "name": "Muhammad Ashraf",
      "address": "3 Sherwood Avenue, M14 6EA, Manchester, M14 6EA",
      "county": "",
      "phone": "0161 224 6641, 07899745315",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230548,
      "name": "Mohammed  Ashraf",
      "address": "27 Burford Road, Whalley Range,, Manchester, M16 8EW",
      "county": "",
      "phone": "0161 881 0787, 07440260941",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230423,
      "name": "Ahmed B A  Audaini",
      "address": "5 Cunard Close, Chorlton On Medlock, M13 9YD, Manchester, M13 9YD",
      "county": "",
      "phone": "07799329840",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230351,
      "name": "Steve Austin",
      "address": "Flat 1 31 Elmswood Avenue, Hulme, M14 4TA",
      "county": "",
      "phone": "07791349472",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230329,
      "name": "Kulsoom Awan",
      "address": "96 Parsonage Road, Manchester, M20 4WU, Manchester, M20 4WU",
      "county": "",
      "phone": "0161 445 9578",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230182,
      "name": "Mohammed Azam",
      "address": "18 Preston Road, Levenshulme, M19 2FR, Manchester, M19 2FR",
      "county": "",
      "phone": "0161 225 2061",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230299,
      "name": "Deborah Michelle  Baker",
      "address": "54 Ardenfield Drive, Manchester, M22 5DD, Manchester, M22 5DD",
      "county": "",
      "phone": "0161 437 5668, 07754872831",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 86,
      "name": "James Terrance Baldwin",
      "address": "Flat 34, Ryland House, 18 Edge Lane, Manchester, M21 9JP",
      "county": "",
      "phone": "0161 860 0458, Lorain-daughter - 07905131989",
      "type": "Private",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230158,
      "name": "Lorraine Baldwin",
      "address": "24 Kingshill Road, M21 9FY, Manchester, Greater Manchester, M21 9FY",
      "county": "Greater Manchester",
      "phone": "07905131989, 0161 460 8071",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230173,
      "name": "Maurice Ball",
      "address": "13 The Grove, Didsbury, M20 2RG, Didsbury, M20 2RG",
      "county": "",
      "phone": "0161 434 2132",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230290,
      "name": "Stuart Barber",
      "address": "96 Shawdene Road, Manchester, M22 4AH, Manchester, M22 4AH",
      "county": "",
      "phone": "0161 998 0443, 07739795785",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 4,
      "name": "Bibi  Barkat",
      "address": "4 Highbury Road, Manchester, England, M16 8PT",
      "county": "England",
      "phone": "Zaheeda Ahmed - 07984284276",
      "type": "IB Budget",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230585,
      "name": "Barbara Jean Barnes",
      "address": "20 Portbush Road, Peel Hall, Manchester, M22 5GP",
      "county": "",
      "phone": "0161 436 7590, 07826114059 - Peter",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230369,
      "name": "Bibi Bashir",
      "address": "17 Sunny Bank Road, Manchester, Lancashire, M13 0XF",
      "county": "Lancashire",
      "phone": "07867562552 - Sadija Daughter",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "Care package ended due to Single cover",
      "move": "Change Status"
    },
    {
      "_id": 230295,
      "name": "Margaret Beetham",
      "address": "81 Nicholas Road, Manchester, M21 9LS, Manchester, M21 9LS",
      "county": "",
      "phone": "0161 881 7657, 07866360329",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 39,
      "name": "Marian Begum",
      "address": "6 Brooks Drive, Hale Barns, WA15 8TN",
      "county": "",
      "phone": "07742244685",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230420,
      "name": "Fazal  Begum",
      "address": "8 Dacre Avenue , Manchester, Greater Manchester, M16 0BX",
      "county": "Greater Manchester",
      "phone": "0161 912 0408",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 5,
      "name": "William Bell",
      "address": "21 Broadfield Road, Moss Side, M14 4WB, Manchester, England, M14 4WB",
      "county": "England",
      "phone": "07926245887, Millicent Graham - 07956132956",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230361,
      "name": "Wendy Janice Bell",
      "address": "431 Greenwood Road, Manchester, M22 9RB, Manchester, M22 9RB",
      "county": "",
      "phone": "0161 312 7054, 07905279834",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230461,
      "name": "Kathleen Bell",
      "address": "25 Ashmoor Road, Woodhouse Park, M22 0FD , Manchester, M22 0FD",
      "county": "",
      "phone": "07904229015",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230587,
      "name": "Alan Bell",
      "address": "80 Lawton Moor Road, Northern Moor, Manchester, M23 0PY",
      "county": "",
      "phone": "0161 998 9125, 07504089356",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230346,
      "name": "Catherine L Bentham",
      "address": "122a Calve Croft Road, Wythenshawe, M22 5FQ, Manchester, M22 5FQ",
      "county": "",
      "phone": "0161 436 2321, 07931381562",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230319,
      "name": "Jean Doreen Bergin",
      "address": "35 Cleeve Road, Northern Moor, M23 0FT, Manchester, M23 0FT",
      "county": "",
      "phone": "07944587910",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230304,
      "name": "Jean E  Bessell",
      "address": "104 Ringway Road, Manchester, M22 5WE, Manchester, M22 5WE",
      "county": "",
      "phone": "0161 499 2931, 07876060332",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 43,
      "name": "Kulsoom Bhatti",
      "address": "6 Mellow Stone Drive, M21 7RJ, Manchester, Lancashire, M21-7RJ",
      "county": "Lancashire",
      "phone": "Son - Saleem: 07590609506, Son - Asif Bhatti -07711295204",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230597,
      "name": "Azra Bibi",
      "address": "45 Montcliffe Crescent, Manchester, M168GR",
      "county": "",
      "phone": "01613128268",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230481,
      "name": "Rita Biggerstaff",
      "address": "13 Tunshill Road, Manchester, Lancashire, M23 9QB",
      "county": "Lancashire",
      "phone": "07866706226, 07866706226",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230678,
      "name": "Margaret Birchwood",
      "address": "38 Morrel Road, Manchester, Lancashire, M22 4WH",
      "county": "Lancashire",
      "phone": "01208880549, Kathryn (Daughter) 07799253775",
      "type": "Private,  Cornwall Council",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230582,
      "name": "June Birds",
      "address": "2 Kepwick Drive, Wyrthenshawe, Manchester, M22 0JW",
      "county": "",
      "phone": "0161 499 9510, 07908408745 - Steven",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230140,
      "name": "Winifred A Birtles",
      "address": "32 Maidstone Avenue, Chorlton, M21 9ND, Manchester, M21 9ND",
      "county": "",
      "phone": "0161 881 4258, 07791775995",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230401,
      "name": "William  Black",
      "address": "18 Hatton Street, Manchester, Lancashire, M12 4NZ",
      "county": "Lancashire",
      "phone": "0161 225 4229, 07974 410 305",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230621,
      "name": "David  Blackshaw",
      "address": "19 Johannesburg Gardens, Wythenshaw, Manchester, County, M23 2RT",
      "county": "County",
      "phone": "07717947932",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230639,
      "name": "Rupert Albert  Blake",
      "address": "7 Etruria Close , Manchester, M13 9BF",
      "county": "",
      "phone": "0161 273 6471",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230456,
      "name": "Brian  Blaney",
      "address": "Flat 6, Cheshire Gardens,14 Stelfox Avenue M14 7DD, Manchester, M14 7DD",
      "county": "",
      "phone": "07775171970",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230373,
      "name": "Helen Mabel Alice Blinston",
      "address": "8 Westbrook Court, 21 Bowling Road, Manchester, Lancashire, M18 7JA",
      "county": "Lancashire",
      "phone": "07877392300",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230168,
      "name": "Jean Bond",
      "address": "8 Gorsey Road, M22 9JL, Wythenshawe, M22 9JL",
      "county": "",
      "phone": "07594646878",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 91,
      "name": "Mary Bones",
      "address": "Flat 5, Arden Court, 1 Oakhouse Drive, M21 8EW, Manchester, M21 8EW",
      "county": "",
      "phone": "0161 862 0536, Marie-(DAUGHTER) - 07541695011",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230276,
      "name": "Diane Maria Bowling",
      "address": "7 Acres Fold Avenue, M22 5BL, Manchester, M22 5BL",
      "county": "",
      "phone": "07591360481",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 105,
      "name": "Ralph Bracewell",
      "address": "12 Aldercroft Avenue, Manchester, England, M22 1AD",
      "county": "England",
      "phone": "0161 4374363",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230426,
      "name": "Racheal Anne Bradley",
      "address": "93 Royal Oak Road, Baguley, M23 1DZ, Manchester, M23 1DZ",
      "county": "",
      "phone": "0161 718 3234",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230460,
      "name": "Janet Theresa Brady",
      "address": "12 Crowborough Walk, Hulme, M15 6ND, Manchester, M15 6ND",
      "county": "",
      "phone": "07887901598, 07456034004",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230642,
      "name": "Janet Brady",
      "address": "12 Crowborough Walk , Hulme, M15 6ND",
      "county": "",
      "phone": "0161 226 0810, 07835951006",
      "type": "",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230645,
      "name": "Janet  Brady",
      "address": "12 Crowborough Walk , Manchester, M15 6ND",
      "county": "",
      "phone": "0161 226 0810, 07835951006",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "Janets care has been withdrawn due to non-engagement",
      "move": "Change Status"
    },
    {
      "_id": 112,
      "name": "Anita Braithwaite",
      "address": "2 New Vine Street, Hulme, M15 5ND",
      "county": "",
      "phone": "07762421040",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230348,
      "name": "Bridget Brannan",
      "address": "22 Hollyhedge Road, Manchester, M22 8HE, Manchester, M22 8HE",
      "county": "",
      "phone": "07464213781",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230318,
      "name": "Dean John  Brannigan",
      "address": "21 Gorston Walk, M22 1PG, Manchester, M22 1PG",
      "county": "",
      "phone": "07594272583",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230537,
      "name": "Peter  Breslin",
      "address": "6 Wishaw Square, Chorlton, Manchester, M21 7GF",
      "county": "",
      "phone": "07587521314",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230161,
      "name": "Stanley Brett",
      "address": "161 Egerton Road South, M21 0XD, Manchester, Greater Manchester, M21 0XD",
      "county": "Greater Manchester",
      "phone": "0161 881 2504",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230589,
      "name": "Francis William Briggs",
      "address": "76 Bleak Hey Road, Manchester, M22 5ES",
      "county": "",
      "phone": "0161 902 9642, 07916215969",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230374,
      "name": "Mavis  Brindley",
      "address": "16 Cherryton Walk, Manchester, Lancashire, M13 9SJ",
      "county": "Lancashire",
      "phone": "07747332145",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230375,
      "name": "Nesta  Briscoe",
      "address": "2B Wadeson Road, M13 9XD , Manchester, Lancashire, M13 9XD",
      "county": "Lancashire",
      "phone": "07917 191565- Daughter Shirley, 0161 273 3198",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 77,
      "name": "Helena Brooks",
      "address": "11 Galgate Close, Manchester, M15 5AJ",
      "county": "",
      "phone": "01612269726, Bridget-Daughter- 07790018638",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230594,
      "name": "John Brotherton",
      "address": "1 Overton Road, M22 8JN, Manchester, Lancashire, M22 8JN",
      "county": "Lancashire",
      "phone": "0161 998 5088, 07854108023 - brother",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230186,
      "name": "Gloria Brown",
      "address": "7 Bryan Road, Manchester, Lancashire, M21 0RH",
      "county": "Lancashire",
      "phone": "07903806693",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230443,
      "name": "Ellen Brown",
      "address": "44 Hardcastle Avenue, Manchester, M21 7LH, Manchester, M21 7LH",
      "county": "",
      "phone": "0161 881 7428, 07949409667 - James",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230502,
      "name": "John Brown",
      "address": "1 Oakcliffe Road, Baguley, M23 1DA, Manchester, M23 1DA",
      "county": "",
      "phone": "07599351552, 07873233409",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230510,
      "name": "Ruby  Bryan",
      "address": "183 Oswald Road, Chorlton, M21 9AZ, Manchester, M21 9AZ",
      "county": "",
      "phone": "0161 881 6702, 07515940088",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230419,
      "name": "Patricia Bryla",
      "address": "27 High Lane, Chorlton, M21 9DJ, Manchester, M21 9DJ",
      "county": "",
      "phone": "0161 861 0223, 07810716748",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 55,
      "name": "Peter  Buckley",
      "address": "Flat 35, Rowan Court, 9 Green Street, Manchester, M14 6TN",
      "county": "",
      "phone": "Peter - 07904321103, Nicola-07825432721",
      "type": "MCC SPOT,  MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230203,
      "name": "Eamon J Burke",
      "address": "2 Stephens Road, Withington, M20 4UY, Manchester, M20 4UY",
      "county": "",
      "phone": "0161 445 3692",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 111,
      "name": "Christopher Burns",
      "address": "225 Wythenshawe Road, Manchester, M23 9DB",
      "county": "",
      "phone": "07922510892",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "BLOCK TRANSFER WITH AREA PROVIDER",
      "move": "Change Status"
    },
    {
      "_id": 230274,
      "name": "Tahira Butt",
      "address": "Flat 10 Rowan Court, 9 Green Street, M14 6TN, Manchester, M14 6TN",
      "county": "",
      "phone": "0161 224 8930",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230653,
      "name": "Hazel Butterworth",
      "address": "41 Arden Lodge Road, M239AF, Manchester, Lancashire, M239AF",
      "county": "Lancashire",
      "phone": "07305048374, 07305048374",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "Package ended as per brokerage request",
      "move": "Change Status"
    },
    {
      "_id": 230562,
      "name": "Jane Byrne",
      "address": "7 Tatham Close, Longsight, Manchester, M13 0GB",
      "county": "",
      "phone": "07789547933, 07342069014 - Lateefat",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230255,
      "name": "Jane Byrne",
      "address": "7 Tatham Close, Manchester, M13 0GB",
      "county": "",
      "phone": "07789547933",
      "type": "",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230427,
      "name": "Winifred Cahill",
      "address": "5 Strathmore Avenue, Whalley Range, M16 0BU, Manchester, M16 0BU",
      "county": "",
      "phone": "0161 881 8677, 07966978509",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230287,
      "name": "Annie Callaghan",
      "address": "Flat 16 Holland Court, 382 Barlow Moor Road, Manchester, M21 8BF",
      "county": "",
      "phone": "07933106326, 07851667927",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 48,
      "name": "Beatrice  Carbert",
      "address": "Flat 26 Kenneth Collis Court, Wythenshawe, M22 9QU",
      "county": "",
      "phone": "0161 613 0164",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 108,
      "name": "Josephine Carpenter",
      "address": "84 Weller Avenue, Manchester, M21 7ST",
      "county": "",
      "phone": "0161 860 6382",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 16,
      "name": "Emma Carr (Fairclough)",
      "address": "386 Portway , Wythenshawe, M22 1SS                , Manchester, Lancashire, M22 1SS",
      "county": "Lancashire",
      "phone": "07440 455 819, 0161-220 8657 Parents",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230608,
      "name": "Norma Ann  Carter",
      "address": "35 Woodhouse Lane, Wythenshawe , Manchester, M22 8JS",
      "county": "",
      "phone": "07759633039",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230591,
      "name": "Robert A Cave",
      "address": "5 Martock Avenue, Peel Hall, Manchester, M22 5FL",
      "county": "",
      "phone": "0161 498 9035, 07779543698 - Father",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230193,
      "name": "Tina Marie Chilumbu",
      "address": "Flat 1 Lee Court, Longley Lane, M22 4HZ, Manchester, M22 4HZ",
      "county": "",
      "phone": "07835462666",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230187,
      "name": "Joyce Chiona",
      "address": "339 Kingsway M19 1BW, Manchester, Greater Manchester, M19 1BW",
      "county": "Greater Manchester",
      "phone": "0161 943 3666",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230607,
      "name": "Barbara  Claire Spencer",
      "address": "Flat 19 Brook Court, 4 Crossland Road , Manchester, County, M21 9DG",
      "county": "County",
      "phone": "0161 881 0379",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230496,
      "name": "Kevin Clark",
      "address": "Flat 87 Gorton Mill House, 420 Abbey Hey Lane, Manchester, M18 8DX",
      "county": "",
      "phone": "07464120825",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230170,
      "name": "Naomi Clarke",
      "address": "5 Le Bas House, 46 Ormskirk Avenue, M20 1HJ, Manchester, M20 1HJ",
      "county": "",
      "phone": "0161 881 1385, 07534933520",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 95,
      "name": "Ann McCarthy Clitheroe",
      "address": "5 Abbotsleigh Avenue, Manchester, M23 9RP",
      "county": "",
      "phone": "0161 478 4822, 07906349146",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230284,
      "name": "Sara Clow",
      "address": "7 Eliza Street, M15 5TA, Manchester, M15 5TA",
      "county": "",
      "phone": "07493270687, 07773100429",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230418,
      "name": "Rose  Cocker",
      "address": "7 Waterside Close, Manchester, M21 7NU, Manchester, M21 7NU",
      "county": "",
      "phone": "07388620730, Denise - 07851449701 NOK",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230504,
      "name": "Paul Cockram",
      "address": "34 Lee Court, Longley Lane, M22 4HZ, Manchester, M22 4HZ",
      "county": "",
      "phone": "07827586659",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 35,
      "name": "Pamela Collicutt",
      "address": "9 Melrose Crescent, Hale, WA15 8NN",
      "county": "",
      "phone": "0161 980 6680, David - Nephew - 07833542418",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 60,
      "name": "Evelyn Collins",
      "address": "16, Orton Road, Northern Moor, Manchester, Lancashire, M23 0RL",
      "county": "Lancashire",
      "phone": "0161 613 0386",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 58,
      "name": "John Connell",
      "address": "Flat 47, Le Bas House, 46 Ormskirk Avenue, M20 1HF, Manchester, M20 1HF",
      "county": "",
      "phone": "Jackie - 07595991850, Home\t01614382522",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230172,
      "name": "Thomas  Connolly",
      "address": "Flat 18 Brook Court, 4 Crossland Court, M21 9DG, Manchester, M21 9DG",
      "county": "",
      "phone": "0161 286 0266",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230206,
      "name": "Helena Conroy",
      "address": "20 White Moss Avenue, M21 0XT, Manchester, M21 0XT",
      "county": "",
      "phone": "0161 881 7129",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230478,
      "name": "John Constable",
      "address": "5 Dovecote Mews, Manchester, M21 9HN, Manchester, M21 9HN",
      "county": "",
      "phone": "07500309165",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230439,
      "name": "Martina  Conway",
      "address": "40 Painswick Road, Wythenshawe, M22 1GG, Manchester, M22 1GG",
      "county": "",
      "phone": "07914448240",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230466,
      "name": "Anthony James Conway",
      "address": "1 Moorside, 6 Robert Owen Gardens, M22 4DD, Manchester, M22 4DD",
      "county": "",
      "phone": "07919408786, 07709393817",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230300,
      "name": "Charles E Cooke",
      "address": "Flat 12 Hutton Lodge, 384-388 Wilmslow Road, Manchester, M20 3NA",
      "county": "",
      "phone": "07505765497, 0161 264 5994",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230428,
      "name": "Robert Allen Cooper",
      "address": "3 Ashmore Road, Manchester, M22 0FD, Manchester, M22 0FD",
      "county": "",
      "phone": "0161 282 0701, 07437889366",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230269,
      "name": "Sandra D Cottrell",
      "address": "10 Carrick Gardens, M22 9XF, Manchester, M22 9XF",
      "county": "",
      "phone": "0161 436 3606",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230549,
      "name": "Joan Crawley",
      "address": "6 Kingsholme Road, Manchester, M22 1AN",
      "county": "",
      "phone": "Claire Gardner - 07376162994",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 10,
      "name": "Cara Crossman",
      "address": "73 Brandwood Avenue,, Manchester, England, M21-7PL",
      "county": "England",
      "phone": "Kim: 07932032193, Kim: 07932032193",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230281,
      "name": "Florence  Cunning",
      "address": "55 Cundiff Road, M21 8FS, Manchester, M21 8FS",
      "county": "",
      "phone": "0161 915 8040, 07815441392",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230146,
      "name": "Jean Curran",
      "address": "28 Nethercote Avenue, M23 1LL, Manchester, Greater Manchester, M23 1LL",
      "county": "Greater Manchester",
      "phone": "07584 240723",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 113,
      "name": "Bridget Teresa Curry",
      "address": "15 Whitchurch Road, M20 1EX, Withington, M20 1EX",
      "county": "",
      "phone": "0161 434 2278",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 11,
      "name": "Katy Daly",
      "address": "26 Leeswood Avenue, Manchester, England, M21 7LR",
      "county": "England",
      "phone": "Katy daly - 07454892287",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230156,
      "name": "Mark Daly",
      "address": "22 Hall Lane, Baguley, M23 1AG, Baguley, M23 1AG",
      "county": "",
      "phone": "0161 902 9155, 07725716302 - Mary Smith",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230139,
      "name": "Hassan Dashti",
      "address": "192 Kingsway, M19 1DB, Manchester, M19 1DB",
      "county": "",
      "phone": "07383965658",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230160,
      "name": "Maria  Daulby",
      "address": "3 Kingsholme Road, M22 1AN , Manchester, Greater Manchester, M22 1AN",
      "county": "Greater Manchester",
      "phone": "0161 286 7682",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 88,
      "name": "Enid Davidson",
      "address": "45 Hatchett Road, Manchester, Lancashire, M22 0FB",
      "county": "Lancashire",
      "phone": "01614372274",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230262,
      "name": "Robert Douglas  Davis",
      "address": "45 Patch Croft Road, M22 5JR, Manchester, M22 5JR",
      "county": "",
      "phone": "0161 436 4057, 07566755989 Brian",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230457,
      "name": "Margaret  Davis",
      "address": "45 Patch Croft Road, Manchester, M22 5JR, Manchester, M22 5JR",
      "county": "",
      "phone": "0161 436 4057, 07566755989 - Brian",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230563,
      "name": "Muriel Dawes",
      "address": "2 Meadow Bank, Chorlton, Manchester, M21 8FP",
      "county": "",
      "phone": "0161 485 8055, 07801106574 - Paul",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230448,
      "name": "Moira Ann Day",
      "address": "Flat 35 Westfields, 212 Hall Lane, Manchester, M23 1LP",
      "county": "",
      "phone": "07748873140, 07950630665",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230141,
      "name": "Marie  De Botte",
      "address": "2 Plummer Avenue, M21 8EU, Manchester, Greater Manchester, M21 8EU",
      "county": "Greater Manchester",
      "phone": "0161 860 7659",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230459,
      "name": "Linda J Delaney",
      "address": "6 Cosham Road, Peel Hall, M22 5AL, Manchester, M22 5AL",
      "county": "",
      "phone": "07935024811",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230339,
      "name": "Sirima Dhanapala",
      "address": "539 Barlow Moor Road, Chorlton, M21 8AQ, Manchester, M21 8AQ",
      "county": "",
      "phone": "07503648927",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230665,
      "name": "Sadio Diallo",
      "address": "Montgomery House Demesne Road , Manchester, M16 8PH",
      "county": "",
      "phone": "07492604546",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230578,
      "name": "Patricia Dillon",
      "address": "45 Eastpark Close, Brunswick, Manchester, M13 9SD",
      "county": "",
      "phone": "0161 273 7229",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 14,
      "name": "Carina  Dixon",
      "address": "Flat 2 May Court, 58-62 Victoria Road, Manchester, England, M16 8DR",
      "county": "England",
      "phone": "0161-226-9194,  07766824742",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 62,
      "name": "Carole Dixon",
      "address": "28 Wastdale Road, Manchester, M23 2RS",
      "county": "",
      "phone": "07806781828",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 107,
      "name": "Hugh Doherty",
      "address": "Flat 28, Le Bas House, Ormskirk Avenue, Manchester, M20 1HJ",
      "county": "",
      "phone": "0161 286 0962",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230417,
      "name": "Elizabeth Doherty",
      "address": "277 Withington Road, , Manchester, M21 0ZA",
      "county": "",
      "phone": "07929665869, 07929665869",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230358,
      "name": "Henry Dolan",
      "address": "9 Ashmoor Walk, Woodhouse Park, M22 0EH, Manchester, M22 0EH",
      "county": "",
      "phone": "07960200775",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230335,
      "name": "Ann Doran",
      "address": "12 Catfield Walk, Hulme, M15 4HH, Manchester, M15 4HH",
      "county": "",
      "phone": "07849276937",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230332,
      "name": "Margaret  Drinkhill",
      "address": "19 Dinmor Road, Manchester, M22 1NN, Wythenshawe, M22 1NN",
      "county": "",
      "phone": "07387082183-Gary, 07870973319-Roy",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230195,
      "name": "Peter Frederick  Dronsfield",
      "address": "25 Henwood Road, Withington, M20 4XQ, Manchester, M20 4XQ",
      "county": "",
      "phone": "07748677749",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230581,
      "name": "Rita Dorothy  Duckworth",
      "address": "341a Portway, Woodhouse Park, Manchester, M22 0EJ",
      "county": "",
      "phone": "0161 436 1802",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230499,
      "name": "Carol Duggan",
      "address": "24 York Avenue, Manchester, M16 0AR",
      "county": "",
      "phone": "0161 862 5006, 07746579502",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230309,
      "name": "Marie Teresa  Dunn",
      "address": "16 Westholme Road, Manchester, M20 3QN, Manchester, M20 3QN",
      "county": "",
      "phone": "0161 445 2480",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 101,
      "name": "Michelle Earlam",
      "address": "83 Aston Avenue M14 7HN, Fallowfield, M14 7HN",
      "county": "",
      "phone": "0161 900 1624, Lisa-Daughter-07956146826",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230568,
      "name": "Margaret Ann Edge",
      "address": "10 Chipping Square, Longsight, Manchester, M12 5AX",
      "county": "",
      "phone": "07834287121",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230137,
      "name": "Donald  Edwardson",
      "address": "9 Whitethorn Avenue, M16 7RR, Manchester, Greater Manchester, M16 7RR",
      "county": "Greater Manchester",
      "phone": "0161 227 9767",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230306,
      "name": "William  Elliot",
      "address": "Flat 42 Boat Lane Court, Brett Street, M22 4EZ, Manchester, M22 4EZ",
      "county": "",
      "phone": "0161 998 3056",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 15,
      "name": "Greville  Ellis",
      "address": "1 Springbridge Road,, Manchester, England, M16 8PX",
      "county": "England",
      "phone": "0161 226 9529,  Debbie Ellis\t07474679490",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230475,
      "name": "Gerald  Fagan",
      "address": "3 Harmony Square, Manchester, M13 9HD, Manchester, M13 9HD",
      "county": "",
      "phone": "07957908513",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230661,
      "name": "Robert Casimir Farrell",
      "address": "8 Oxford Place , Manchester, Lancashire, M14 5RZ",
      "county": "Lancashire",
      "phone": "0161 248 5629, 07980606087",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230698,
      "name": "Carl  Favager",
      "address": "Etrop Grange Thorley Lane, Manchester, Lancashire, M90 4EG",
      "county": "Lancashire",
      "phone": "07729393396",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 22,
      "name": "Tony  Feeney",
      "address": "42 Branntingham Road, Manchester, Lancashire, M16 8pp",
      "county": "Lancashire",
      "phone": "Tony Feeney - 01612262440, 07860363835(son - Graham)",
      "type": "Private,  IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230165,
      "name": "Aubrey Fernandez",
      "address": "Flat 4 Elizabeth Court, Brook Road, M14 6WB, Manchester, M14 6WB",
      "county": "",
      "phone": "0161 282 3714, 07577654388",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230487,
      "name": "Yvonne Fildes",
      "address": "28 Stanley Avenue, Manchester, M14 5HB, Manchester, M14 5HB",
      "county": "",
      "phone": "0161 224 8260, 07968439094",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230662,
      "name": "James Fitzgerald",
      "address": "5 Chapel Road, M22 4JN, Manchester, M22 4JN",
      "county": "",
      "phone": "0161 945 2604",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "James' daughter called to inform us that James had passed away",
      "move": "Change Status"
    },
    {
      "_id": 230355,
      "name": "Susan Flindt",
      "address": "19 Beech Hurst Close, M16 8EP, Manchester, M16 8EP",
      "county": "",
      "phone": "0161 881 4830, 0208 426 4883 - Jane",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230635,
      "name": "Christine  Foley",
      "address": "95 Oswald , Manchester, M21 9GE",
      "county": "",
      "phone": "07753 163101",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230422,
      "name": "Carole A Foran",
      "address": "173 Lawton Moor Road, Northen Moor, M23 0PW, Manchester, M23 0PW",
      "county": "",
      "phone": "07960849326",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 23,
      "name": "John Forde",
      "address": "Flat 4, Birch Tree Court, Manchester, Lancashire, M22 5RY",
      "county": "Lancashire",
      "phone": "0161 437 8146, Bobby - (Flat 64)-07871096883",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230271,
      "name": "Pauline T Forrest",
      "address": "7 Tunshill Road, Brooklands, M23 9QB, Manchester, M23 9QB",
      "county": "",
      "phone": "07977470974",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 97,
      "name": "Loswell Freeman",
      "address": "346 Moss Lane East, Manchester, M14 4LZ",
      "county": "",
      "phone": "0161 226 4967",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230544,
      "name": "Tim Fung",
      "address": "4 Grenham Avenue, Manchester, M15 4HD",
      "county": "",
      "phone": "07799665061 - Jimmy",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230345,
      "name": "Sylvia  Furgrove",
      "address": "27 Beresford Street, Moss Side, M14 4SB, Manchester, M14 4SB",
      "county": "",
      "phone": "0161 226 6182, 07984648633",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 30,
      "name": "Patricia  Furness",
      "address": "18 Callingdon Road, Manchester, Lancashire, M21 7GN",
      "county": "Lancashire",
      "phone": "0161 881 9047",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230263,
      "name": "Clare Gallaway",
      "address": "Flat 28 York Court, Burnage Lane, M19 2HZ, Manchester, M19 2HZ",
      "county": "",
      "phone": "07764486983",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230564,
      "name": "Charles Gandy",
      "address": "130 Royle Green Road, Manchester, M22 4LD",
      "county": "",
      "phone": "07804883599, 07954589867 - Sharron",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 74,
      "name": "Angela Gannon",
      "address": "9 Carver Walk, Manchester, M15 6NH",
      "county": "",
      "phone": "0161 226 0868",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230472,
      "name": "Anne Geer",
      "address": "1 Brookfield Court, Kirkman Close, M18 7EA, Manchester, M18 7EA",
      "county": "",
      "phone": "07500694889, 07960903210",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230505,
      "name": "Bernard Gent",
      "address": "23 Wexford Walk, Manchester, M22 5GN, Manchester, M22 5GN",
      "county": "",
      "phone": "0161 436 3323",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230671,
      "name": "Bernard  Gent",
      "address": "23 Wexford Walk, Lancashire, M22 5GN",
      "county": "",
      "phone": "Dorothy (Wife) 0161 436 3323, Emma (Daughter) 07376194334",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230495,
      "name": "Frank  Geoffrey Mills",
      "address": "Flat 14, Rowan Court, 9 Green Street, Manchester, M14 6TN",
      "county": "",
      "phone": "0161 225 5878, 07917715175",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230312,
      "name": "Elizabeth Gibson",
      "address": "6 Rangemore Avenue, Northenden, M22 4JU, Manchester, M22 4JU",
      "county": "",
      "phone": "0161 902 0913",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230340,
      "name": "Maureen  Gilbert",
      "address": "62 Dinmor Road, Woodhouse Park, M22 1WJ, Manchester, M22 1WJ",
      "county": "",
      "phone": "07359089593",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230513,
      "name": "Joan Giles",
      "address": "55 Darras Road, Gorton, M18 7PS, Manchester, M18 7PS",
      "county": "",
      "phone": "0161 223 4947, 0161 370 6980",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230407,
      "name": "Marshall Gillibrand",
      "address": "21A Lawngreen Avenue, Manchester, M21 8FH, Manchester, M21 8FH",
      "county": "",
      "phone": "07950018960",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230349,
      "name": "Barbara Ann Gleeson",
      "address": "7 Mersey Bank Avenue, Manchester, M21 7WR",
      "county": "",
      "phone": "0161 861 8075, 07419330633",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230476,
      "name": "Robert Glover",
      "address": "Flat 23 Gorton Mill House, 420 Abbey Hey Lane, Gorton, M18 8PU",
      "county": "",
      "phone": "07743482805, 07896727004",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230336,
      "name": "Marjorie Goddard",
      "address": "Flat 6 Trafford Mansions, Manchester Road, M16 0ED, Manchester, M16 0ED",
      "county": "",
      "phone": "0161 861 0951",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230167,
      "name": "Edith Goodwin",
      "address": "22 Nettlebarn Road, Manchester, M22 8HQ",
      "county": "",
      "phone": "07983169327",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 45,
      "name": "Renford Gordon",
      "address": "33 Royce Road, Manchester, M15 5BP",
      "county": "",
      "phone": "07306025347",
      "type": "NHS Trafford",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230376,
      "name": "Enid Gordon",
      "address": "18 Pembroke Close, M13 9DY, Manchester, Greater Manchester, M13 9DY",
      "county": "Greater Manchester",
      "phone": "0161 273 6214, 07879877725 (Mike - Son)",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230497,
      "name": "Michael John Gordon",
      "address": "Flat 6 Ivy Court, Beech Road, M21 9FL, Manchester, M21 9FL",
      "county": "",
      "phone": "0161 861 8909",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230551,
      "name": "Maureen Gormley",
      "address": "6 Brading Walk, Manchester, M22 0LN",
      "county": "",
      "phone": "07754422862, 07877050062 - Damien",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230134,
      "name": "Gwendolyn Grandison",
      "address": "117 Chorlton Road, Hulme, M15 4AR, Manchester, M15 4AR",
      "county": "",
      "phone": "0161 226 9034, 07588824540",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230154,
      "name": "Brian  Gratton",
      "address": "2 Mellington Avenue, M20 5NJ, Manchester, Greater Manchester, M20 5NJ",
      "county": "Greater Manchester",
      "phone": "07970 415205",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230337,
      "name": "Robert R Gray",
      "address": "38c High Lane, Chorlton, M21 9DZ, Manchester, M21 9DZ",
      "county": "",
      "phone": "0161 860 5259, 07590696091 - Michelle",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230122,
      "name": "Frank Ethelbert Greenidge",
      "address": "14 Garthorne Close, M16 7EY, Manchester, M16 7EY",
      "county": "",
      "phone": "0161 342 0958, 078701050958",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230371,
      "name": "Christopher Gregg",
      "address": "67 Dartford Close, Manchester, Lancashire, M12 4DW",
      "county": "Lancashire",
      "phone": "0161 273 8340, 07967 356750 son paul",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230331,
      "name": "Winifred  Griffin",
      "address": "15 Willowbrook Gardens, 41 Gladside Road, M22 9BN, Wythenshawe, M22 9BN",
      "county": "",
      "phone": "0161 945 8463",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230116,
      "name": "June Griffiths",
      "address": "24 Barnett Avenue M20 3FA, Manchester, M20 3FA",
      "county": "",
      "phone": "0161 448 8860",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230362,
      "name": "Eric Thomas James  Griffiths",
      "address": "109 Nell Lane, Chorlton, M21 7SW, Manchester, M21 7SW",
      "county": "",
      "phone": "Michelle-Daughter- 07948524413",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230465,
      "name": "Gloria  Griffiths-Robinson",
      "address": "3 Beckfoot Drive, Manchester, M13 0XA, Manchester, M13 0XA",
      "county": "",
      "phone": "0161 225 6178, 07903188761",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230131,
      "name": "Sheila Grimes",
      "address": "Flat 87, 200 Hollyhedge Road, Wythenshawe, M22 4QN",
      "county": "",
      "phone": "0161 759 9235",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230258,
      "name": "Charles Andrew Grimshaw",
      "address": "24 Greenpark Road, M22 4DR, Manchester, M22 4DR",
      "county": "",
      "phone": "0161 998 1344",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230406,
      "name": "Bogdan Stanislaw Grzeslak",
      "address": "153 College Road, Whalley Range, M16 0AA , Manchester, M16 0AA",
      "county": "",
      "phone": "0161 862 0631",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230389,
      "name": "Robert  Guard",
      "address": "19 Grange Avenue, , Manchester, Lancashire, M19 2EY",
      "county": "Lancashire",
      "phone": "0161 224 3224",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230286,
      "name": "Emily Hadfield",
      "address": "8 Coppice Drive, M22 4DT, Manchester, M22 4DT",
      "county": "",
      "phone": "0161 945 5162, Michael - son - 07808898656",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230382,
      "name": "John Arthur  Hadfield",
      "address": "10 Reed Street, Manchester, Lancashire, M18 8JT",
      "county": "Lancashire",
      "phone": "Janet Ford- 01612925515, Janet Ford - 07934063011",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230286,
      "name": "Emily  Hadfield",
      "address": "8 Coppice Drive, M22 4DT, Manchester, M22 4DT",
      "county": "",
      "phone": "0161 945 5162, Michael - son - 07808898656",
      "type": "MCC SPOT",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230610,
      "name": "Jean  Hairdarah",
      "address": "Flat 7  3-5 Fernleaf Street Moss Side , Manchester, M14 4LJ",
      "county": "",
      "phone": "07568 566142, 07568 566142",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230169,
      "name": "Fadumo Haji Farah",
      "address": "12 Cardigan Terrace, M14 4SP, Manchester, M14 4SP",
      "county": "",
      "phone": "07975575387",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230115,
      "name": "Robert  Hall",
      "address": "19 Orchard Street, M20 2LP, Manchester, M20 2LP",
      "county": "",
      "phone": "0161 434 7823",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230342,
      "name": "John Hall",
      "address": "Flat 38 Arden Court, 1 Oakhouse Drive, M21 8EW, Manchester, M21 8EW",
      "county": "",
      "phone": "0161 865 4152/07874709054",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230469,
      "name": "Gladys Hall",
      "address": "Flat 4 Village 135, 3 Hollyhedge Court Road, Manchetser, M22 4ZP",
      "county": "",
      "phone": "07775756640",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230515,
      "name": "Jacqueline Ann Hall",
      "address": "44 Broadhill Road, Burnage, M19 1AG, Manchester, M19 1AG",
      "county": "",
      "phone": "07598683768",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230211,
      "name": "Jacqueline  Hall",
      "address": "44 Broadhill Road, Manchester, M19 1AG",
      "county": "",
      "phone": "07598 683768",
      "type": "Block",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230620,
      "name": "Jean  Hall",
      "address": "75 Croftlands Road, Crossacres , Wythenshaw, M22 9ZD",
      "county": "",
      "phone": "0161 437 0034, 07492792096",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230398,
      "name": "Roderick Halvey",
      "address": "24 Farrer Road, Manchester, Greater Manchester, M13 0QX",
      "county": "Greater Manchester",
      "phone": "0161 225 0885, Mary (daughter)-07702088049",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230593,
      "name": "Arshad Hamid",
      "address": "Longmere Centre 181 Longley Lane , Manchester, M22 4JG",
      "county": "",
      "phone": "07578 902 275",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230399,
      "name": "Roy  Hanley",
      "address": "72 Lockton Court, Lockton Close, Manchester, Lancashire, M1 7JQ",
      "county": "Lancashire",
      "phone": "0161 273 2850, 07858 515878",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230550,
      "name": "Paul K Hanna",
      "address": "Flat 8 Jackson Court, 249 Ryebank Road, Chorlton, Manchester, M21 9LX",
      "county": "",
      "phone": "0161 637 1226, 07443890038 - Margaret",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 29,
      "name": "Patricia Hardiman",
      "address": "13 Marden Road, Manchester, M23 1JR",
      "county": "",
      "phone": "07737818855 (sister Anna-Marie",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230586,
      "name": "James Eamon Hardiman",
      "address": "44 Bleasdale Road, Wythenshawe, Manchester, M22 1RU",
      "county": "",
      "phone": "07811620513",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 75,
      "name": "Betty  Hardy",
      "address": "54 Buckingham Road, Manchester, M21 0RP",
      "county": "",
      "phone": "0161 881 8787",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230604,
      "name": "Edward Brian  Hargreaves",
      "address": "8 Maismore Road, Woodhouse Park , Manchester, M22 1RZ",
      "county": "",
      "phone": "07415526803, 0161 374 2549",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230619,
      "name": "Patrick  Harris",
      "address": "3 Buckthorne Close , Chorlton, Manchester, M21 7UG",
      "county": "Manchester",
      "phone": "01618815360",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230498,
      "name": "Avril Harrison",
      "address": "Flat 49, Boat Lane Court, Brett Street, M22 4EZ, Manchester, M22 4EZ",
      "county": "",
      "phone": "Lorna - daughter - 07957867198, 07939801805-hailey",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230524,
      "name": "Michael Hartigan",
      "address": "98 Engell Close, Manchester, M18 8LA",
      "county": "",
      "phone": "07745864416, Patrick (Brother) 07546593548",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230333,
      "name": "Vanda Alicja Hasemi",
      "address": "23 Whalley Grove, Manchester, M16 8DN, Manchester, M16 8DN",
      "county": "",
      "phone": "0161 881 0031, 07846229203",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230509,
      "name": "Kamal Faeq Hassan",
      "address": "2 Ludlow Close, Manchester, M12 5UH, Manchester, M12 5UH",
      "county": "",
      "phone": "07442954190, 07449803038",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230516,
      "name": "Norman J  Hathaway",
      "address": "58 Shelford Avenue, Gorton, M18 7DE, Manchester, M18 7DE",
      "county": "",
      "phone": "0161 223 3554, 07967913381",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230181,
      "name": "Carole Haughton",
      "address": "Flat 17 Holland Court, Barlow Moor Road, M21 8BF, Manchester, M21 9NJ",
      "county": "",
      "phone": "0161 917 3311, 07368637660",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 59,
      "name": "Peter Haynes",
      "address": "45 George Mann Close, Wythenshawe, M22 1GZ",
      "county": "",
      "phone": "Lisa - 07902984886",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 61,
      "name": "Joseph Henderson",
      "address": "8 Waterford Avenue M20 2ZN, Manchester, Lancashire, M20 2ZN",
      "county": "Lancashire",
      "phone": "Home: 0161-915-0562, 01613122379",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230408,
      "name": "John M Henderson",
      "address": "3 Gatwick Avenue, Baguley, M23 1NE, Manchester, M23 1NE",
      "county": "",
      "phone": "0161 514 0091, 07775985006",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230377,
      "name": "Linda J Heryng",
      "address": "Flat 6 Cosgrove House, 130 Wenlock Way, Manchester, Lancashire, M12 5AW",
      "county": "Lancashire",
      "phone": "0161 228 8328, 07766884455 (David)",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230328,
      "name": "Kathleen Veronica Heslop",
      "address": "103 Firbank Road, Newall Green, M23 2ZN, Manchester, M23 2ZN",
      "county": "",
      "phone": "0161 945 1188",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230598,
      "name": "Linda Hewerdine",
      "address": "63 Clarendon Road, Manchester, M16 8JF",
      "county": "",
      "phone": "07495026059, 07495026059",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230491,
      "name": "Maeve Higgins",
      "address": "7 Rushfield Drive, Manchester, Manchester, M13 0RF",
      "county": "",
      "phone": "0161 224 2030",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 36,
      "name": "John Higson",
      "address": "314 Brooklands Road, Manchester, Lancashire, M23 9HB",
      "county": "Lancashire",
      "phone": "Home - 0161 973 9897, Wife Rebecca - 07900196531",
      "type": "NHS Trafford,  Private",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230411,
      "name": "Eric Hilderbrandt",
      "address": "64 Floyd Avenue, Chorlton, M21 7NB, Manchester, M21 7NB",
      "county": "",
      "phone": "07931680555, Mark - son- 07494612510",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230430,
      "name": "Peter Arnott Hillary",
      "address": "7a Bideford Drive, Baguley, M23 0QH, Manchester, M23 0QH",
      "county": "",
      "phone": "0161 902 9978, 07463121998",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230130,
      "name": "Thomas Michael  Hogan",
      "address": "37 Longfield Road, M23 0GH, Manchester, M23 0GH",
      "county": "",
      "phone": "0161 998 1073",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230157,
      "name": "Beryl Holt",
      "address": "61 Cotefield Road, Woodhouse Park, M22 1UY, Wythenshawe, M22 1UY",
      "county": "",
      "phone": "07961868135",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230507,
      "name": "Daniel G Hong",
      "address": "9 Ellesmere Road South, Chorlton, M21 0TE, Manchester, M21 0TE",
      "county": "",
      "phone": "0161 881 6873, 07759130134",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230438,
      "name": "Joan Horne",
      "address": "210 Ashurst Road, Peel Hall, M22 5AX, Manchester, M22 5AX",
      "county": "",
      "phone": "0161 437 8270",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230450,
      "name": "Barbara  Horrocks",
      "address": "13 Moat Road M22 8HP, Manchester, M22 8HP",
      "county": "",
      "phone": "0161 998 9951, 07999361635",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230282,
      "name": "Charles Joseph Hough",
      "address": "37 Greenpark Road, Northenden, M22 4DS, Manchester, M22 4DS",
      "county": "",
      "phone": "07468073983",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230445,
      "name": "Ronald Houghton",
      "address": "1 Chidwall Road, Woodhouse Park, M22 1GU, Manchester, M22 1GU",
      "county": "",
      "phone": "Jenifer - 07840507157, 07967384785",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230111,
      "name": "Paul Howell",
      "address": "4 Johns Close, Manchester, M21 9EH",
      "county": "",
      "phone": "07719512516",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230492,
      "name": "Steven Hudson",
      "address": "38 Cornishway, Manchester, M22 0LD, Manchester, M22 0LD",
      "county": "",
      "phone": "07895282367, 07427623303",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230178,
      "name": "Mary Huggins",
      "address": "34 Staithes Road, M22 0HD, Manchester, M22 0HD",
      "county": "",
      "phone": "0161 436 4279, 07904873662",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230514,
      "name": "Shirley Hughes",
      "address": "17 Bealey Close, Manchester, M18 4AH, Manchester, M18 4AH",
      "county": "",
      "phone": "0161 220 7155, 07496737250 - Angela",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230414,
      "name": "Jean Hurst",
      "address": "67 Honford Road, Benchill, M22 9PE, Manchester, M22 9PE",
      "county": "",
      "phone": "0161 948 2373, 07553362401",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230127,
      "name": "Liaqat Hussain",
      "address": "1 Eldson Drive, Manchester, Lancashire, M18 8WG",
      "county": "Lancashire",
      "phone": "0161 317 9996",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230149,
      "name": "Anjuman Hussain",
      "address": "311 Withington Road, M21 0YA, Manchester, M21 0YA",
      "county": "",
      "phone": "07739530030, 0161 861 9405",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "Anjumans care from We Care has finished today after lunch call.",
      "move": "Change Status"
    },
    {
      "_id": 230353,
      "name": "Aminah Hussain",
      "address": "7 Vixen Close, Manchester, M21 7UA, Manchester, M21 7UA",
      "county": "",
      "phone": "Amina - 07395808157, 07562587582",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230383,
      "name": "Liaqat  Hussain",
      "address": "1 Elsdon Drive, Manchester, Lancashire, M18 8WG",
      "county": "Lancashire",
      "phone": "0161 317 9996",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230413,
      "name": "Corrina Hyland",
      "address": "85 Ashurst Road, Manchester, M22 5BE, Manchester, M22 5BE",
      "county": "",
      "phone": "0161 613 2143, 07797209309",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230275,
      "name": "John  Hyrb",
      "address": "195 Cornishway, M22 1SX, Manchester, M22 1SX",
      "county": "",
      "phone": "0161 282 5191",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230541,
      "name": "Cyril F Ingram",
      "address": "10 Heys Avenue, Northern Moor, Manchester, M23 0WL",
      "county": "",
      "phone": "07704526866, 07592601364 - Lilian",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230558,
      "name": "Mohamed  Iqbal",
      "address": "292 Withington Road, Chorlton, Manchester, M21 0XZ",
      "county": "",
      "phone": "0161 881 5752, 07864856047 - Safina",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230144,
      "name": "Patricia Iredale",
      "address": "54 Roundwood Road, M22 4SF, Manchester, Greater Manchester, M22 4SF",
      "county": "Greater Manchester",
      "phone": "0161 998 2967",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230386,
      "name": "Mohammad  Ishaque",
      "address": "16 Fencot Drive,, Manchester, Lancashire, M12 4PJ",
      "county": "Lancashire",
      "phone": "0161 605 8486, Shahida(Daughter)- 07914378819",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 82,
      "name": "Janet Jackson",
      "address": "8 Nevenden Drive, Manchester, M23 2RG",
      "county": "",
      "phone": "0161 611 0008, 07826225673",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230128,
      "name": "Maureen  Jackson",
      "address": "200 Mount Road, Manchester, Lancashire, M18 7QS",
      "county": "Lancashire",
      "phone": "0161 223 6559, 07773610052 (Peter-Son)",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230257,
      "name": "Patricia Jackson",
      "address": "28 Saintsbridge Road, Woodhouse Park, M22 1UW, Manchester, M22 1UW",
      "county": "",
      "phone": "0161 437 7905",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230338,
      "name": "George Jackson",
      "address": "100 Darley Avenue, Chorlton, M21 7GG, Manchester, M21 7GG",
      "county": "",
      "phone": "0161 286 3285",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230354,
      "name": "Michael Blair Jackson",
      "address": "30 Lee Court, Longley Lane, Northenden, M22 4HZ, Manchester, M22 4HZ",
      "county": "",
      "phone": "0161 836 6680, Noreen - daughter -07866108995",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230378,
      "name": "Maureen  Jackson",
      "address": "200 Mount Road, Manchester, Lancashire, M18 7QS",
      "county": "Lancashire",
      "phone": "0161 223 6559, 07773610052 Son Peter",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230479,
      "name": "Andrea Claire Jackson",
      "address": "3 Briardene Gardens, Wythenshawe, M22 9UN, Manchester, M22 9UN",
      "county": "",
      "phone": "07860332608",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230567,
      "name": "Hilary Denise Jackson",
      "address": "21 Olney Avenue, Manchester, M22 8AB",
      "county": "",
      "phone": "0161 998 8129",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230431,
      "name": "Winifred  Jackson",
      "address": "60 Churchstoke Walk , Manchester, County, M23 9AD",
      "county": "County",
      "phone": "07956566523, Karen - 0161 286 7357",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230617,
      "name": "Patricia  Jackson",
      "address": "28 Saintsbridge Road Woodhouse Park, Manchester, M22 1UW",
      "county": "",
      "phone": "07890634948",
      "type": "BLOCK",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 28,
      "name": "Kamlesh Jain",
      "address": "1 Warwick Court, Manchester, Lancashire, M16 0JG",
      "county": "Lancashire",
      "phone": "0161 286 6403",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230474,
      "name": "Eileen James",
      "address": "8 Grindley Avenue, Chorlton, M21 7NF, Manchester, M21 7NF",
      "county": "",
      "phone": "07462165298, 07462949464",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230625,
      "name": "Anthony  James Gleave",
      "address": "16 Tour Avenue, Manchester, M23 0LN",
      "county": "",
      "phone": "07896466211",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230627,
      "name": "Parveen  Janjua",
      "address": "6 Cambridge Avenue , Whalley Range, M16 8JY",
      "county": "",
      "phone": "07827962427",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230303,
      "name": "Barbara Kerr Jeffrey",
      "address": "22 Corkland Road, Chorlton, M21 8UT, Manchester, M21 8UT",
      "county": "",
      "phone": "07949162266",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230412,
      "name": "Frank Johnson",
      "address": "19 St Benedicts Avenue, Manchester, M12 5LG, Manchester, M12 5LG",
      "county": "",
      "phone": "07305085502",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230424,
      "name": "Patricia Johnson",
      "address": "61 Hollyhedge Road, Benchill, M22 8HW, Manchester, M22 8HW",
      "county": "",
      "phone": "0161 998 0479, 07790933006 - Reg",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230449,
      "name": "Janet Johnson",
      "address": "48 Cundiff Road M21 8FW, Manchester, M21 8FW",
      "county": "",
      "phone": "07931442015",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "move to care home",
      "move": "Change Status"
    },
    {
      "_id": 230592,
      "name": "John Leslie Johnson",
      "address": "2 Brundage Road, Woodhouse Park, Manchester, M22 0BZ",
      "county": "",
      "phone": "0161 499 1930, 07734022546 - Stephen",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230521,
      "name": "William Johnston",
      "address": "3 Newlyn Street, Rushholme, M14 7PQ, Manchester, M14 7PQ",
      "county": "",
      "phone": "0161 225 4381, 07731460240",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230442,
      "name": "Carole P Jones",
      "address": "12 Cromwell Avenue, Whalley Range, M16 0BQ, Manchester, M16 0BQ",
      "county": "",
      "phone": "07766053456 - Terrance, 07814486298 - Janice",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230547,
      "name": "Janet Jones",
      "address": "37 Wyrerne Road, Manchester, M21 0ZW",
      "county": "",
      "phone": "07968374629, 07968374629 - Karen",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230656,
      "name": "Linda Jones",
      "address": "Creative Support, Flat 1, 177 Brownley Road, Manchester, Lancashire, M22 9UH",
      "county": "Lancashire",
      "phone": "0161 498 0971",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230640,
      "name": "Paul Kenneth Jones",
      "address": "Flat 6, 28 Alness Road, Whalley Range , Manchester, M16 8HR",
      "county": "",
      "phone": "07463150826",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "Paul has gone into temporary accommodation",
      "move": "Change Status"
    },
    {
      "_id": 29,
      "name": "Susan Jordan",
      "address": "58 Dunnisher Road Road , Wythenshawe, , Manchester, Lancashire, M23 2YN",
      "county": "Lancashire",
      "phone": "0161 998 4594, 07716372456",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230191,
      "name": "Denise M  Judd",
      "address": "16 Pulruan Road, Chorlton, M21 9NR, Manchester, M21 9NR",
      "county": "",
      "phone": "0161 881 0600",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230672,
      "name": "Donald W Judge",
      "address": "12 Appleby Lodge , Manchester, M14 6HZ",
      "county": "",
      "phone": 123,
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230615,
      "name": "Valerie  June Burgess",
      "address": "20 Ashfield Grove Gorton , Manchester, Lancashire, m18 7sa",
      "county": "Lancashire",
      "phone": "01612234258",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230612,
      "name": "Sada Kadir",
      "address": "208 Mount Road Gorton Manchester , Gorton, M18 7QS",
      "county": "",
      "phone": "0161 230 8319",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230520,
      "name": "Dev Kaur",
      "address": "383 Wilbraham Road, Manchester, M21 0UT, Manchester, M21 0UT",
      "county": "",
      "phone": "0161 8604889, 07462831150",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230577,
      "name": "Santkoh Kaur",
      "address": "Sikh Temple, Guru Nanak Gurdwara, Monton Street,, Moss Side, M14 4LS",
      "county": "",
      "phone": "07417397744",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230107,
      "name": "Irene Kay",
      "address": "87 Catterick Road, M20 6HF, Manchester, M20 6HF",
      "county": "",
      "phone": "0161 445 4492, 07958877801",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230601,
      "name": "Linda  Kay",
      "address": "49 Hardy Lane , Manchester, M21 7JY",
      "county": "",
      "phone": "07763673370",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230119,
      "name": "Joseph Patrick  Keary",
      "address": "7 Lincoln Minshull Close, Manchester, M23 0NB",
      "county": "",
      "phone": "07464625417",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "move off block",
      "move": "Change Status"
    },
    {
      "_id": 230363,
      "name": "Pauline Kelly",
      "address": "23 Brookburn Road, Manchester, M21 8FF, Manchester, M21 8FF",
      "county": "",
      "phone": "Home Num: 0161 860 7006, 07852137702",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230471,
      "name": "William Kelly",
      "address": "Flat 5 Egerton Court, Edge Lane, M21 9HF, Manchester, M21 9HF",
      "county": "",
      "phone": "07767158637",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230297,
      "name": "Edward Kershaw",
      "address": "3 Brookhead Avenue, Manchester, M20 1PP, Manchester, M20 1PP",
      "county": "",
      "phone": "07986845895, Wendy - daughter - 07993286726",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230387,
      "name": "Mohammad  Khalid",
      "address": "22 Lytham Road, Manchester, Greater Manchester, M19 2AS",
      "county": "Greater Manchester",
      "phone": "0161 224 9938, Tanveer (Son) - 07961 100615",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230272,
      "name": "Ahmed  Khan",
      "address": "11 Lyndene Road, M22 4QA, Wythenshawe, M22 4QA",
      "county": "",
      "phone": "07532736943",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230638,
      "name": "Tabassum Khan",
      "address": "178 Upper Chorlton Road, Whalley Range, Manchester, M16 7SF",
      "county": "",
      "phone": "07707040600",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230613,
      "name": "Bahadur Khan",
      "address": "13 Meldon Road Longshight, Manchester, Lancashire, m13 0tt",
      "county": "Lancashire",
      "phone": "07858515558",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 27,
      "name": "Fatima Khatoon",
      "address": "9 Mytton Street, Manchester, Lancashire, M15 5AZ",
      "county": "Lancashire",
      "phone": "N/A",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230555,
      "name": "Zahia  Khizar",
      "address": "15 Holmfirth Street, Manchester, M13 0NS",
      "county": "",
      "phone": "07899322952",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 51,
      "name": "Kathleen Kilcourse",
      "address": "34 Weller Avenue, Manchester, M21 7SG",
      "county": "",
      "phone": "0161 881 5658, 07565082274",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230523,
      "name": "Eleanor Kilday",
      "address": "623 Mauldeth Road West, Chorlton, M21 7SA, Manchester, M21 7SA",
      "county": "",
      "phone": "0161 861 8769, 07743791635",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230546,
      "name": "Susan Ann King",
      "address": "25 Garthorne Close, Moss Side, Manchester, M16 7EY",
      "county": "",
      "phone": "07444306509, 07883037125 - Mark",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 13,
      "name": "Brian  Kinsley",
      "address": "90 Ringway Road, Northenden , Manchester, Lancashire, M22 5WE",
      "county": "Lancashire",
      "phone": "01614363617",
      "type": "Private,  Private",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230105,
      "name": "Brian Kirby",
      "address": "7 Hillend Place, M23 0LP, Manchester, Greater Manchester, M23 0LP",
      "county": "Greater Manchester",
      "phone": "0161 2152937",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230344,
      "name": "Hermine Klubb",
      "address": "102 Nicolas Road, Chorlton, M21 9LT, Manchester, M21 9LT",
      "county": "",
      "phone": "0161 861 0300",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 56,
      "name": "Anthony  Knowles",
      "address": "Flat 29 Adastral House, Manchester, M21 0UD",
      "county": "",
      "phone": "0161 862 0996, Irene - 07816578679",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230201,
      "name": "Wioletta  Koziel",
      "address": "25 Austell Road, Wythenshawe, M22 0NP, Wythenshawe, M22 0NP",
      "county": "",
      "phone": "07941051717",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230323,
      "name": "Justina  Lai",
      "address": "3 Birch Tree Court, Wythenshawe, M22 5RY, Wythenshawe, M22 5RY",
      "county": "",
      "phone": "07470312359",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230539,
      "name": "Vit Lapcik",
      "address": "32 Randolph Street, Levenshulme, Manchester, M19 3AX",
      "county": "",
      "phone": "07453498751, 07864056752",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 14,
      "name": "Margaret Leather",
      "address": "9 Beech Hurst Close, Manchester, Lancshire, M16-8EP",
      "county": "Lancshire",
      "phone": "Daughter Karen - 07789227339, , 0161 964 9881",
      "type": "Private,  Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230658,
      "name": "Alan Edward  Leech",
      "address": "38 Teynham Walk, Manchester, Lancashire, M22 1TB",
      "county": "Lancashire",
      "phone": "07818743578",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "Michelle called to say that Alan Leech died in hospital on Saturday",
      "move": "Change Status"
    },
    {
      "_id": 230432,
      "name": "Gerald  Leighton",
      "address": "34 Parkside Road, Fallowfield, M14 7JN, Manchester, M14 7JN",
      "county": "",
      "phone": "0161 209 8360, 07483298132",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230115,
      "name": "Theresa Leonard",
      "address": "53 Wilbraham Road M14 7DN, Manchester, Greater Manchester, M14 7DN",
      "county": "Greater Manchester",
      "phone": "01612258156, Lorraine Leonard - 07960835044",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230500,
      "name": "Joan Lewis",
      "address": "31 Henfield Walk, Brownley Green, M22 9QF, Manchester, M22 9QF",
      "county": "",
      "phone": "0161 437 1512",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230132,
      "name": "Lewis Leyland",
      "address": "Flat 14 Brook Court, 4 Crossland Court, M21 9DG, Manchester, M21 9DG",
      "county": "",
      "phone": "07404951989",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230387,
      "name": "Chan Li",
      "address": "13 Gardner Street, Manchester, Greater Manchester, M12 5PH",
      "county": "Greater Manchester",
      "phone": "07402223331",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230485,
      "name": "May Diane Lincoln",
      "address": "105 Woodhouse Lane, Benchill, M22 8JX, Manchester, M22 8JX",
      "county": "",
      "phone": "0161 902 9384, 07787128231-Stephen",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230651,
      "name": "Maddison  Lingard",
      "address": "Moss Croft, 30 Grange Road, Bowdon, WA14 3EE , Manchester, WA14 3EE",
      "county": "",
      "phone": "07840946627",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 17,
      "name": "Mary Little",
      "address": "99 Hart Road, Manchester, Lancashire, M14 7EZ",
      "county": "Lancashire",
      "phone": "0161 225 9830, 07961 012095 (Mark-Son)",
      "type": "IB Budget",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230416,
      "name": "Sara Patricia Livesey",
      "address": "70 Horton Road, Fallowfield, M14 7GB, Manchester, M14 7GB",
      "county": "",
      "phone": "0161 224 1671, 07726311534",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230605,
      "name": "Lenford Livingston",
      "address": "489 Greenwood Road , Manchester, M22 9RD",
      "county": "",
      "phone": "07787584616",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 19,
      "name": "Anastasios Loannides",
      "address": "40 Derby Road ,Fallowfield, Manchester, Lancashire, M14 6US",
      "county": "Lancashire",
      "phone": "0161 224 5184",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230324,
      "name": "Jacob Lobo",
      "address": "30 Parrs Wood Road, Withington, M20 4RB, Manchester, M20 4RB",
      "county": "",
      "phone": "0161 445 8860",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230440,
      "name": "John Loftus",
      "address": "Flat 12, 30 Hathersage Road, Manchester, M13 0FE, Manchester, M13 0FE",
      "county": "",
      "phone": "07824319741, 07939997083 - Claire",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230196,
      "name": "Charles Lomas",
      "address": "2 Mitford Court, Derby Road, M14 6WD, Fallowfield, M14 6WD",
      "county": "",
      "phone": "07471742482, 07391973143",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230334,
      "name": "Emily  Lomax",
      "address": "25 Fir Grove , Manchester, M19 2ET",
      "county": "",
      "phone": "07817360936",
      "type": "",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 20,
      "name": "Patricia Lord",
      "address": "Flat 2 Trafalger Crt 203 Withington Rd , Manchester, Lancashire, M16 8JW",
      "county": "Lancashire",
      "phone": "0161 226 0696, 07510863778",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": "0000",
      "name": "Janice Ann Lowe",
      "address": "23 Melsomby Road M23 0EG, Manchester, Northern Moor, M23 0EG",
      "county": "Northern Moor",
      "phone": "07541706474, 07541706474",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230189,
      "name": "Margaret Lowe",
      "address": "6 Beechwood Court Holme Road M20 2UA, Manchester, Greater Manchester, M20 2UA",
      "county": "Greater Manchester",
      "phone": "0161 448 0611",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230289,
      "name": "James Kenneth Lye",
      "address": "13 Aldermary Road, M21 7QW, Manchester, M21 7QW",
      "county": "",
      "phone": "0161 861 8628",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230614,
      "name": "Karen Lynn",
      "address": "26 Woodham Road, Northern Moor, Manchester, M23 0NS",
      "county": "Manchester",
      "phone": "07854229807, 07854229807",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 21,
      "name": "Jonathan Lyons",
      "address": "6 Kentmore Close, Manchester, Lancashire, M12 5FG",
      "county": "Lancashire",
      "phone": "0161 223 7636, 07555714340",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230145,
      "name": "Catherine  M Young",
      "address": "39 Caldervalve Avenue, M21 7QE, Manchester, Greater Manchester, M21 7QE",
      "county": "Greater Manchester",
      "phone": "07961 532091",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230301,
      "name": "Ryszard Maciejewski",
      "address": "69 Austell Road, Manchester, M22 0NG, Manchester, M22 0NG",
      "county": "",
      "phone": "07401212886",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 50,
      "name": "Ida Mackey",
      "address": "Flat 19, 51 Manor Drive, Chorlton Cum Hardy, Manchester, England, M21 7JU",
      "county": "England",
      "phone": "01614341893 / 07910097966, Daughter Sue - 07980562403",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230174,
      "name": "Karen Macrae",
      "address": "4 Painswick Road, M22 1QS, Manchester, M22 1QS",
      "county": "",
      "phone": "0161 258 6495, 07927177736",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 23,
      "name": "Annie Magee",
      "address": "80 Robinswood Road, Wythenshaw, Manchester, Lancahsire, M22 0BX",
      "county": "Lancahsire",
      "phone": "0161 217 3936, 0161 437 8274",
      "type": "IB Budget",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 24,
      "name": "Andrew  Maguire",
      "address": "66 Churchstoke Walk, Manchester, Lancashire, M23 9AD",
      "county": "Lancashire",
      "phone": "0161 945 1655",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230136,
      "name": "Phyllis Mary Maher",
      "address": "5 Brading Walk, Woodhouse Park, M22 0LN, Manchester, M22 0LN",
      "county": "",
      "phone": "0161 436 4421",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230126,
      "name": "Haroon Majeed",
      "address": "61 Stamford Road, Manchester, Lancashire, M13 0SW",
      "county": "Lancashire",
      "phone": "0161 257 3739, 07470296468",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 38,
      "name": "Alisa  Malcolm-Hutton",
      "address": "29 Kingsway Park, Manchester, M41 7EB",
      "county": "",
      "phone": "0161 282 3611, 07904 258101",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 80,
      "name": "John Maley",
      "address": "35 St Georges Road, Manchester, M14 6SX",
      "county": "",
      "phone": "0161 225 3017",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230129,
      "name": "Riaz Malik",
      "address": "12 Portland Road, Manchester, Lancashire, M13 0SA",
      "county": "Lancashire",
      "phone": "0161 225 1806, 07748113047",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 54,
      "name": "Joan Manetta",
      "address": "Flat 14 Royal Court, Royal Street, Manchester, M14 6RP",
      "county": "",
      "phone": "0161 248 7245",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230147,
      "name": "Keith  Manock",
      "address": "Flat 26 Village 135, M22 4ZP, Manchester, M22 4ZP",
      "county": "",
      "phone": "0161 428 9353",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230588,
      "name": "Fatma Maow",
      "address": "27 Wood Bridge Grove, Manchester, M23 0NL",
      "county": "",
      "phone": "07498399656 - Munaza",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230421,
      "name": "Kathleen Martin",
      "address": "Flat 18 The Grange, 10 Wensleydale Close, Manchester, M23 2EF",
      "county": "",
      "phone": "0161 437 6731",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 42,
      "name": "Eric  Mathews",
      "address": "8 Khartoum Street, Manchester, M16 9WE",
      "county": "",
      "phone": "0161 232 8251, Brian (Son) - 07770450945",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230394,
      "name": "Neowa Agna Matin",
      "address": "27 Pennington Street , Manchester, Greater Manchester, M12 4QJ",
      "county": "Greater Manchester",
      "phone": "07437313114",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230409,
      "name": "Gordon Maxwell",
      "address": "33 Lee Court, Longley Lane, M22 4HZ, Manchester, M22 4HZ",
      "county": "",
      "phone": "07494438674, 07743455426-Gino",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230178,
      "name": "Lynda Mcaleese",
      "address": "24 Melsomby Road, Manchester, M23 0ER",
      "county": "",
      "phone": "07708957547, 07708957547",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230277,
      "name": "Elizabeth Mcauley",
      "address": "Flat 47, 47 Aylesby Court, 487 Wilbraham Road, Manchester, M21 0US",
      "county": "",
      "phone": "07478207814, 0161 439 1583",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230270,
      "name": "Patricia McCabe",
      "address": "25 Sandbach Avenue, M14 7EG, Manchester, M14 7EG",
      "county": "",
      "phone": "07542790487",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230453,
      "name": "William  McCaffrey",
      "address": "220 Greenbrow Road, Manchester, M23 2TU",
      "county": "",
      "phone": "0161 437 5688",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230454,
      "name": "William Thomas  McCaffrey",
      "address": "220 Greenbrow Road, Newall Green, M23 2TU, Manchester, Lancashire, M23 2TU",
      "county": "Lancashire",
      "phone": "0161 437 6588",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230623,
      "name": "Eric  McClarnan",
      "address": "8 Foxbench Walk , Manchester, M21 7RE",
      "county": "",
      "phone": "07832080818, Pez (Son) 07533424822",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230112,
      "name": "Dorothy Mcdonough",
      "address": "2 Bowgreen Walk, M15 4DJ, Manchester, Greater Manchester, M15 4DJ",
      "county": "Greater Manchester",
      "phone": "07796220965",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230114,
      "name": "Dorothy McDonough",
      "address": "2 Bowgreen Walk, Hulme, M15 4DJ",
      "county": "",
      "phone": "07796220965",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 25,
      "name": "Eugine McEntee",
      "address": "18 Alderfield Road, Alderfield House , Manchester, Lancashire, M21 9HJ",
      "county": "Lancashire",
      "phone": "Son Paul - 07809426851, Andrea - 07846194916",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230266,
      "name": "Michael Joseph McEvoy",
      "address": "2 Belstone Avenue, M23 2SP, Manchester, M23 2SP",
      "county": "",
      "phone": "07814917077",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230429,
      "name": "Anthony  McGovern",
      "address": "Flat 26 Arden Court, 1 Oakhouse Drive , Manchester, M21 8EW",
      "county": "",
      "phone": "07593429936",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 26,
      "name": "Bridget  McHale",
      "address": "38 Albion Street, Manchester, Lancashire, M16 9LZ",
      "county": "Lancashire",
      "phone": "0161 232 3316, 07766100705",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230447,
      "name": "Thomas George McIntyre",
      "address": "19 Liffey Avenue, Manchester, M22 9UZ, Manchester, M22 9UZ",
      "county": "",
      "phone": "07508991908, 07810260661",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 87,
      "name": "Sheila Mckee",
      "address": "Flat 44 Westfields, 212 Hall Lane, Manchester, Lancashire, M23 1LP",
      "county": "Lancashire",
      "phone": "01614988003",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230136,
      "name": "Patricia Mckie",
      "address": "2 Holdgate Close, M15 5EP, Manchester, Greater Manchester, M15 5EP",
      "county": "Greater Manchester",
      "phone": "0161 226 1209",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230229,
      "name": "Rita McKnight",
      "address": "32 Wilton Road, M21 9DW, Manchester, M21 9DW",
      "county": "",
      "phone": "0161 861 8918, 07594549408",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 81,
      "name": "Winnie McMahon",
      "address": "26 Rushey Road, Manchester, M22 8BP",
      "county": "",
      "phone": "07951914317",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "Gone into respite from the 14th feb",
      "move": "Change Status"
    },
    {
      "_id": 230634,
      "name": "Pamela McMahon",
      "address": "Flat 4,Cosgrove Hall Court,8 Albany Road, Manchester, M21 0BA",
      "county": "",
      "phone": "07770578110",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230293,
      "name": "Joseph  Mcnabb",
      "address": "6 Rogate Drive, Manchester, M23 1FU, Manchester, M23 1FU",
      "county": "",
      "phone": "07432640842",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230629,
      "name": "Mary Elizabeth Mcpadden",
      "address": "25 Goodwood Avenue, Manchester, Manchester, M23 9JQ",
      "county": "Manchester",
      "phone": "0161 973 9501, 0161 973 9501",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230648,
      "name": "Carissa  McWilliam",
      "address": "65 Cotefield Road Woodhouse Park  , Manchester, M22 1UY",
      "county": "",
      "phone": "01619719884, 07732 233161",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230522,
      "name": "Christine Ann Meadowcroft",
      "address": "2 Gatwick Avenue, Manchester, M23 1NE, Manchester, M23 1NE",
      "county": "",
      "phone": "07494764272",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230602,
      "name": "Leonard  Meadowcroft",
      "address": "41 Barrowfield Road , Manchester, County, M22 1RS",
      "county": "County",
      "phone": "07564470938, 0161 459 2622",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230603,
      "name": "Leonard Meadowcroft",
      "address": "41 Barrowfield Road, Manchester, M22 1RS",
      "county": "",
      "phone": "07564470938, 07564470938",
      "type": "BLOCK",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230646,
      "name": "Gretta  Meher",
      "address": "FLAT 12 6 ROBERT OWEN GARDENS NORTHENDAN, MANCHESTER, M224DD",
      "county": "",
      "phone": "07000000000",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230470,
      "name": "Fernando Almeida Mendonca",
      "address": "Flat24,24 Cosgrove Hall Crt,8 Albany Road,M21 0BA , Manchester, M21 0BA",
      "county": "",
      "phone": "0161 881 8027, Helen (daughter) 07958773484",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230628,
      "name": "Glenys Mercer",
      "address": "133 Portway Woodhouse Park , Manchester, M22 1XD",
      "county": "",
      "phone": "07944 153908, 07944 153908",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 26,
      "name": "Leah Ellen Middleton",
      "address": "2 Eliza Street, Manchester, M15 5EG",
      "county": "",
      "phone": "0161 226 1067, 07551 646 830",
      "type": "MCC SPOT,  Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 25,
      "name": "Surriyya Begum Mir",
      "address": "584 Kings Road,Stretford, Manchester, Lancashire, M32 8JW",
      "county": "Lancashire",
      "phone": "Mohammed - grandson, 073058667, Daughter Samina - 07984821089",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230228,
      "name": "Bilquis J Mirza",
      "address": "30 Hardcastle Avenue, M21 7LH, Manchester, M21 7LH",
      "county": "",
      "phone": "07853622224, 07425713578",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230643,
      "name": "Antonis  Modinos",
      "address": "44 Cosgrove Hall Court 8 Albany Road , Chorlton, M21 0BA",
      "county": "",
      "phone": "07764767045",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230108,
      "name": "Lal Mohammed",
      "address": "311 Withington Road, M21 0YA, Manchester, Greater Manchester, M21 0YA",
      "county": "Greater Manchester",
      "phone": "07739530030",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230622,
      "name": "Mary  Monica O'Neill",
      "address": "38 Beresford Road , Manchester, M13 0QT",
      "county": "",
      "phone": "07746178652",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230260,
      "name": "Paul  Moorcroft",
      "address": "20 Roughey Gardens, M22 9WJ, Manchester, M22 9WJ",
      "county": "",
      "phone": "07840324162",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 79,
      "name": "Sylvia Moore",
      "address": "100 Burnage Lane, Burnage, M19 2NG",
      "county": "",
      "phone": "07464065046, Son Oliver-07769779637",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230155,
      "name": "Mary Moran",
      "address": "15 Maidstone Avenue, M21 9ND, Manchester, Greater Manchester, M21 9ND",
      "county": "Greater Manchester",
      "phone": "0161 881 6707, 07484215033",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230679,
      "name": "Yvonne Morgan",
      "address": "9 Barbara Castle Square, Manchester, M13 9HW",
      "county": "",
      "phone": "0161 272 6640",
      "type": "MCC SPOT",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 110,
      "name": "Mitzi Linda Morrell",
      "address": "14 Stonebeck Road M23 1EQ, Manchester, M23 1EQ",
      "county": "",
      "phone": "07901229080",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "Blue bird taken over as of lunch today",
      "move": "Change Status"
    },
    {
      "_id": 24,
      "name": "Laura Morris",
      "address": "Flat 12, Manor Court, Manchester, M21 7JU",
      "county": "",
      "phone": "01614341947",
      "type": "Private",
      "status": "RIP",
      "comment": "Laura has passed away in hospital on Friday.",
      "move": "Change Status"
    },
    {
      "_id": 230296,
      "name": "Audrey Morrison",
      "address": "39 College Drive, Whalley Range, M16 0AD, Manchester, M16 0AD",
      "county": "",
      "phone": "0161 881 6775, 07833937715",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230631,
      "name": "Kenneth William Morrison",
      "address": "64 Button Lane M23 0WA, Manchester, M23 0WA",
      "county": "",
      "phone": "0161 613 1223",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230360,
      "name": "Irene  Murphy",
      "address": "88 Clinton Avenue, Manchester, M14 7LG, Manchester, M14 7LG",
      "county": "",
      "phone": "0161 226 9095, 07949123681-Margaret",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230395,
      "name": "Rhoda  Murphy",
      "address": "36 Hanworth Close , Manchester, Lancashire, M13 9UU",
      "county": "Lancashire",
      "phone": "07958 965848 Daughter Julie, 07979 664 782",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230525,
      "name": "John  Murphy",
      "address": "9 Salthill Drive, Wythenshawe, M22 5QQ, Manchester, M22 5QQ",
      "county": "",
      "phone": "0161 436 2360, 07498627928",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230477,
      "name": "Thomas Peter Muskett",
      "address": "Flat 6, 36 Manley Road, Whalley Range, M16 8HN, Manchester, M16 8HN",
      "county": "",
      "phone": "0161 226 6257, 07966925241 - Eammon",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230268,
      "name": "Pushparanee Mylvaganam",
      "address": "Flat 3 Cosgrove Hall Court, 8 Albany Road, M21 0BA, Manchester, M21 0BA",
      "county": "",
      "phone": "0161 860 0226",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230616,
      "name": "Marie Teresa  Nadin",
      "address": "77 Shadowmoss Road Wythenshawe , Manchester, m22 0JT",
      "county": "",
      "phone": "07712587983, 01614372675",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230325,
      "name": "Abaidullah Naeem",
      "address": "129A Manley Road, Whalley Range, M16 8WE, Manchester, M16 8WE",
      "county": "",
      "phone": "07973709912, 07812036190",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230529,
      "name": "Mohammed Naeem",
      "address": "64 Addison Crescent, Old Trafford, , Manchester, M16 0LX",
      "county": "",
      "phone": "07479965133",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230543,
      "name": "Sumaira  Naseem",
      "address": "27 Scarsdale Road, Manchester, M14 5PY",
      "county": "",
      "phone": "07845331130",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230534,
      "name": "Gemma Nash",
      "address": "23D Burford Road, Manchester, M16 8EW, Manchester, M16 8EW",
      "county": "",
      "phone": "0161 860 4790 , 07429426908",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230575,
      "name": "Webster Nevers",
      "address": "27 Clarendon Road West, Chorlton, M21 0RN",
      "county": "",
      "phone": "0161 861 9007, 07501830440",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230565,
      "name": "Patricia A Newall",
      "address": "9 Cherry Tree Road, Norther Moor, Manchester, M23 9BY",
      "county": "",
      "phone": "0161 915 1730, 07772663020 - Sue",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230106,
      "name": "John  Newton",
      "address": "91 Lawton Moor Road, M23 0PU, Manchester, Greater Manchester, M23 0PU",
      "county": "Greater Manchester",
      "phone": "01616132226",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230163,
      "name": "Alma Nicholls",
      "address": "Flat 2 Cheshire Gardens, Stelfox Avenue, M14 7DD , Manchester, M14 7DD",
      "county": "",
      "phone": "0161 478 0643",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230560,
      "name": "Elizabeth Olwen Niemz",
      "address": "23 Patterson Avenue, Manchester, M21 9NB",
      "county": "",
      "phone": "07810800551 - Katie",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230540,
      "name": "Edward Norman",
      "address": "Flat 6 Roselea Court, 6 Downham Walk, Manchester, M23 9DG",
      "county": "",
      "phone": "0161 989 6027, 07310398073",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230482,
      "name": "Elizabeth Norris",
      "address": "209 Greenbrow Road, Newall Green, M23 2TA, Manchester, M23 2TA",
      "county": "",
      "phone": "07858391039",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230365,
      "name": "Christopher V Nugent",
      "address": "18 Grasscroft Close, Fallowfield, M14 7HQ, Manchester, M14 7HQ",
      "county": "",
      "phone": "0161 226 2982 - Mohamed",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230512,
      "name": "Simphiwe  Nyathi",
      "address": "Room 202, The Foyer, 61 Booth Street West, Manchester, M15 6PP",
      "county": "",
      "phone": "07865090300, Amelia Hall's SW - 07766442491",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230493,
      "name": "Kevin O'Connor",
      "address": "Flat 28 Kenneth Collis Court, Mottershead Road, Manchester, M22 9QU",
      "county": "",
      "phone": "07380631459-Phil, 07879624993-Angela",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230494,
      "name": "Kevin  O'Connor",
      "address": "Flat 28, Kenneth Collis Court, Mottershead Road , Manchester, M22 9QU",
      "county": "",
      "phone": "Phil (Brother) 07380631459, Angela - 07879624993",
      "type": "MCC SPOT",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230464,
      "name": "Michael Gerald O'Flaherty",
      "address": "38 Pasture Field Road, Peel Hall, M22 5JU, Manchester, M22 5JU",
      "county": "",
      "phone": "0161 437 9186, 07507569648",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 22,
      "name": "Liam O'Neil",
      "address": "9 Godbert Avenue, Manchester, M21 7JD",
      "county": "",
      "phone": "07833068860 (Laura- Wife)",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 92,
      "name": "Khoriyo Okomaatani",
      "address": "248 Platt Lane, Manchester, M14 7BS",
      "county": "",
      "phone": "07916211281",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230467,
      "name": "Debbie Olive",
      "address": "Flat 67, 3 Hollyhedge Court Road, M22 4ZP, Manchester, M22 4ZP",
      "county": "",
      "phone": "07503956969",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 64,
      "name": "Mary-Anne Oluyinka",
      "address": "Flat 1 35 Burford Road, Manchester, M16 8EW",
      "county": "",
      "phone": "Mary-Anne 07312130467, Georgina (NOK) 07414111887",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230385,
      "name": "Mohamed  Omar",
      "address": "69 Stamford Street, Manchester, Greater Manchester, M16 9JJ",
      "county": "Greater Manchester",
      "phone": "07841098038",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230538,
      "name": "Hazel Yvonne  Ormrod",
      "address": "5 Inglesham Close, Baguley, Manchester, M23 1LQ",
      "county": "",
      "phone": "0161 915 6939, 07411313019",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230185,
      "name": "Norma Orrego",
      "address": "4 Adamson Walk  M14 5UY, Manchester, Greater Manchester, M14 5UY",
      "county": "Greater Manchester",
      "phone": "01612252387",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230197,
      "name": "Stephen G Parker",
      "address": "Westfields Flat 48, Baguley, M23 1LP, Manchester, M23 1LP",
      "county": "",
      "phone": "07716849032",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 57,
      "name": "Doreen Parsonage",
      "address": "16 Bosley Avenue, Manchester, M20 1BQ",
      "county": "",
      "phone": "Wendy - 07718317128",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230531,
      "name": "Myra Anne Partridge",
      "address": "55 Lyndene Road, Benchill, Manchester, M22 4QA, Manchester, M22 4QA",
      "county": "",
      "phone": "07502874882",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230415,
      "name": "Mary Patricia  Pendlebury",
      "address": "Flat 51 Westfields, 212 Hall Lane, M23 1LP, Manchester, M23 1LP",
      "county": "",
      "phone": "07399698659, 07869123456",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 93,
      "name": "Anthony John Pepper",
      "address": "9 Chasetown Close, Manchester, M23 9NS",
      "county": "",
      "phone": "0161 998 1571, Tracey-Daughter- 07889823509",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230326,
      "name": "Gail Peters",
      "address": "44 Stoneacre Road, Manchester, M22 1BN, Manchester, M22 1BN",
      "county": "",
      "phone": "07725995381",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230696,
      "name": "Maria Teresa Picole",
      "address": "214 Manley Road, Manchester, Lancashire, M21 0GZ",
      "county": "Lancashire",
      "phone": "07840946627",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230664,
      "name": "Maria  Pilkington",
      "address": "16 Johns Close , Manchester, Lancashire, M21 9EH",
      "county": "Lancashire",
      "phone": "Angela - 07487839725 , Alisha - 07759099498",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230483,
      "name": "Anthony Platt",
      "address": "37 Wilks Avenue, Wythenshawe, Manchester, M22 5FT",
      "county": "",
      "phone": "07868558217",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 96,
      "name": "Keith Podmore",
      "address": "Flat 88, 200 Hollyhedge Road, Wythenshawe, M22 4QN",
      "county": "",
      "phone": "07941648052, KAYLEE-daughter-07377125981",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 89,
      "name": "John Popplewell",
      "address": "Flat 27 Adastral House Wilbraham Road , MANCHESTER, Lancashire, M21 0UD",
      "county": "Lancashire",
      "phone": "07587776731, 07587776731",
      "type": "Private,  Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230279,
      "name": "Michaela  Potter",
      "address": "35 Mayfair Road  , Manchester, M22 9ZA",
      "county": "",
      "phone": "07464 397 101",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230190,
      "name": "Rita M  Powell",
      "address": "32 Broughville Drive, M20 3WH, Manchester, Greater Manchester, M20 3WH",
      "county": "Greater Manchester",
      "phone": "07796497326",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230322,
      "name": "Margaret  Prophet",
      "address": "7 Brinkshaw Avenue, Crossacres, M22 5FE, Manchester, M22 5FE",
      "county": "",
      "phone": "0161 436 6263, 07952857671",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 20,
      "name": "Anayah Qasim",
      "address": "179 Egerton Road South, Manchester, Lancashire, M21 0XD",
      "county": "Lancashire",
      "phone": "Mum - 07526486133",
      "type": "IB Budget",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230183,
      "name": "Candelaria  Rabnawaz",
      "address": "34 Albemarle Street, Rusholme, M14 4NF, Manchester, M14 4NF",
      "county": "",
      "phone": "07803844278",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230559,
      "name": "Razia Rashid",
      "address": "22 Tarrington Close, Manchester, M12 4TB",
      "county": "",
      "phone": "0161 231 8003, 07448384395",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 67,
      "name": "Leo  Read",
      "address": "36 Scott Avenue, Manchester, M21 9QW",
      "county": "",
      "phone": "Sue - Daughter - 07837370931",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230528,
      "name": "Marion Reed",
      "address": "97 Portway, Manchester, M22 1XB, Manchester, M22 1XB",
      "county": "",
      "phone": "0161 437 0023, 07840871384 - Lesley",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 41,
      "name": "David  Reeves",
      "address": "62 Fairywell Road, Timperley, WA15 6UZ",
      "county": "",
      "phone": "0161 973 8758, 07549121240",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230264,
      "name": "John  Reid",
      "address": "10 Grindley Avenue, M21 7NF, Manchester, M21 7NF",
      "county": "",
      "phone": "0161 861 9980, 07966496461",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230192,
      "name": "James E  Reilly",
      "address": "13 Longcroft Grove, Baguley, M23 1DG, Manchester, M23 1DG",
      "county": "",
      "phone": "0161 879 3079, 07783237940 - Seamus",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 19,
      "name": "Anna-Marie Riaz",
      "address": "Flat 63, Village 135, 3 Hollyhedge Ct Rd, Manchester, Lancashire, M22 4ZP",
      "county": "Lancashire",
      "phone": "07596050851",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 90,
      "name": "Sandra  Richards",
      "address": "6 Belstone Avenue, Manchester, M23 2SP",
      "county": "",
      "phone": "07760290266",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 18,
      "name": "Jessie Riley",
      "address": "31 Roseneath Avenue, Manchester, Lancashire, M19 3LT",
      "county": "Lancashire",
      "phone": "0161 225 9004",
      "type": "Private",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230125,
      "name": "Esau Riley",
      "address": "11 Copthorne Crescent, Manchester, Lancashire, M13 0RA",
      "county": "Lancashire",
      "phone": "0161 257 3865, 07733392194",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230379,
      "name": "Esau 'Basil' Riley",
      "address": "11 Copthorne Crescent, Manchester, Lancashire, M13 0RA",
      "county": "Lancashire",
      "phone": "0161 257 3865, 07733392194",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230347,
      "name": "Jim Rilley",
      "address": "31 Roseneath Avenue, Manchester, England, M19 3LT",
      "county": "England",
      "phone": "0161 225 9004, 0161 225 9004",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 103,
      "name": "Scott Rob",
      "address": "Flat 218, 41 Old Birley Street M15 5RE, Manchester, M15 5RE",
      "county": "",
      "phone": "Marenda 07776422164",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230327,
      "name": "Audrey Roberts",
      "address": "30 Edgeworth Drive, Manchester, M14 6RS",
      "county": "",
      "phone": "0161 224 6788, 07939140837",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230619,
      "name": "Dawn Rebecca  Roberts",
      "address": "83a Ladybarn Lane, Fallowfield , Manchester, M14 6RG",
      "county": "",
      "phone": "07368518553, Peter (Son) - 07585761988",
      "type": "BLOCK",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 33,
      "name": "Patricia  Robinson",
      "address": "48 Shetland Way, Davyhulme, M41 7HD",
      "county": "",
      "phone": "07824509301",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230380,
      "name": "Hugh Rodgers",
      "address": "3 Antilles Close, Manchester, Lancashire, M12 4LA",
      "county": "Lancashire",
      "phone": "01614786900, 01619006486",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230397,
      "name": "Hugh Rodgers",
      "address": "3 Antilles Close, Manchester, Lancashire, M12 4LA",
      "county": "Lancashire",
      "phone": "01614786900",
      "type": "MCC SPOT",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 44,
      "name": "Betty Roe",
      "address": "70 Woodlawn Court, Manchester, M16 9RL",
      "county": "",
      "phone": "0161 881 9615",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230343,
      "name": "Bogumila Marzena Rojda",
      "address": "3 Danbury Walk, Manchester, M23 9FA, Manchester, M23 9FA",
      "county": "",
      "phone": "07891907737",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230511,
      "name": "Winifred  Rose Dingwall",
      "address": "49 Ivygreen Raod , Manchester, M21 9BA",
      "county": "",
      "phone": "0161 881 7893",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 65,
      "name": "Ellen Philomena Roughneen",
      "address": "22 Montcliffe Crescent, Manchester, M16 8GR",
      "county": "",
      "phone": "0161 226 6472, 07572866409",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230535,
      "name": "Theresa Rowe",
      "address": "7 Gatwick Avenue, Manchester, M23 1NE",
      "county": "",
      "phone": "07721966874, 07488314147",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230245,
      "name": "Kenneth Royal",
      "address": "Flat 41 Brownley Court, Brownley Court Road, , Manchester, M22 4QH",
      "county": "",
      "phone": "0161 945 1796",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230314,
      "name": "Ann Ruane",
      "address": "4 Adams Avenue, Manchester, M21 8FX, Manchester, M21 8FX",
      "county": "",
      "phone": "0161 882 0543",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230356,
      "name": "Fatima Sadik",
      "address": "8 Catherston Road, Moss Side, M16 7FH, Manchester, M16 7FH",
      "county": "",
      "phone": "0161 227 7625, 07904605478",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230110,
      "name": "Alan Sadler",
      "address": "19 Connaught Avenue, Manchester, Greater Manchester, M19 2NW",
      "county": "Greater Manchester",
      "phone": "0161 224 5015",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230606,
      "name": "Bettie  Sale",
      "address": "246 Wythenshawe Road, Northern Moor , Manchester, County, M23 0WT",
      "county": "County",
      "phone": "0161 945 7037, Tony (Son) - 07772620048",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230198,
      "name": "Youseff Amar Samlie",
      "address": "23 Hardy Lane, Chorlton, M21 7JY, Manchester, M21 7JY",
      "county": "",
      "phone": "07918322692, 07377957518",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230503,
      "name": "Paul Sandiford",
      "address": "1 Carling Drive, Manchester, M22 5GG, Manchester, M22 5GG",
      "county": "",
      "phone": "0161 437 9986",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230590,
      "name": "Lesley Sandiford",
      "address": "1 Carling Drive, Manchester, Sharston, M22 5GG",
      "county": "Sharston",
      "phone": "0161 437 9986, 07512613715",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230693,
      "name": "June Winifred  Sandiford",
      "address": "7 Millhalf Close, Hulme, Manchester, Lancashire, M15 5DY",
      "county": "Lancashire",
      "phone": "07488306618, Kelly (Daughter) 0759841398",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 17,
      "name": "Maimuna Sanneh",
      "address": "3 Cressfield Way, Manchester, Lancashire, M21 7RW",
      "county": "Lancashire",
      "phone": "07455 206833",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230484,
      "name": "Dorothea Sapoutzi",
      "address": "48 Morville Road, Manchester, M21 0TR",
      "county": "",
      "phone": "07833630239, Stalyious (Son) 07884475578",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230316,
      "name": "Joyce  Saunders",
      "address": "3 Hampton Road, Manchester, M21 7LA, Manchester, M21 9LA",
      "county": "",
      "phone": "07427554082-Ormzel",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 16,
      "name": "Carole Scott",
      "address": "Flat 1 Kenneth Collis Court, Mottershead Road, Manchester, Lancashire, M22 9QU",
      "county": "Lancashire",
      "phone": "07419 193923, 07736758785 Susan",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230330,
      "name": "John Thomas Scott",
      "address": "33 Dunstall Road, Manchester, M22 4PQ, Manchester, M22 4PQ",
      "county": "",
      "phone": "07490471814",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230366,
      "name": "James  Scott",
      "address": "Flat 22 Neilson Court, 107 Bowland Road, M23 1LE, Manchester, M23 1LE",
      "county": "",
      "phone": "0161 945 5482",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 15,
      "name": "Ashna Sedik",
      "address": "13 Halford Avenue, Manchester, Lancashire, M14 7BT",
      "county": "Lancashire",
      "phone": "Siwan - Husband - 07833358434",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230468,
      "name": "Robert Jenkins Senior",
      "address": "12 Freckleton Avenue, Chorlton, M21 7PR, Manchester, M21 7PR",
      "county": "",
      "phone": "0161 610 0008, 07503340808",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230444,
      "name": "Muhammad Shafiq-Chaudhary",
      "address": "184 Withington Road, Manchester, M16 8WJ, Manchester, M16 8WJ",
      "county": "",
      "phone": "07939016336",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230367,
      "name": "Anna Shah",
      "address": "3 Ansdell Avenue, Manchester, M21 8TP, Manchester",
      "county": "",
      "phone": "0161 376 2901, 07713976614 -Tara",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 83,
      "name": "Maqbool Shahnaz",
      "address": "3 Pengham Walk, Manchester, M23 0NH",
      "county": "",
      "phone": "0161 902 9210, 07475758332",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 14,
      "name": "Bibi Sharif  Sharifan",
      "address": "55 Broadfield Road, Manchester, Lancashire, M14 4WE",
      "county": "Lancashire",
      "phone": "0161 226 9280",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230117,
      "name": "Bibi Sharifan",
      "address": "7 Granville Avenue, Manchester, M16 8JX",
      "county": "",
      "phone": "0161 861 0312",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 32,
      "name": "Vimla Sharma",
      "address": "23 Petersfield Drive, MANCHESTER, Lancashire, M23 9PS",
      "county": "Lancashire",
      "phone": "01612833276, Vishal Sharma\t- 07738469207",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 13,
      "name": "Neelam Shazadi",
      "address": "231 Wellington Road North, Manchester, Lancashire, SK4 2RQ",
      "county": "Lancashire",
      "phone": "07827920888",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230569,
      "name": "James Shearson",
      "address": "51 Greenbrow Road, Manchester, M23 2FT",
      "county": "",
      "phone": "07923417745 - Ian",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230571,
      "name": "Mohammad Shahid Sheikh",
      "address": "10 Foxbench Walk, Arrowfield Road, Manchester, M21 7RE",
      "county": "",
      "phone": "07574322387, 07847871468 - Sajall",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 12,
      "name": "Amy Shenton",
      "address": "Flat 8, St Hildas Road, Manchester, Lancashire, M16 9TJ",
      "county": "Lancashire",
      "phone": "0161 876 4642, 07722914665",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230583,
      "name": "Shirley Simmonds",
      "address": "2 Chigwell Close, Wythenshawe, Manchster, M22 4PA",
      "county": "",
      "phone": "0161 998 9669",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 104,
      "name": "Pauline Simms",
      "address": "20 Barncroft Garden, Wythenshawe, M22 8LZ",
      "county": "",
      "phone": "07398216222, Toni - 07966709788",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230302,
      "name": "Karen Simms",
      "address": "Flat 34 Hibiscus Court, 16 Sedgeborough Road, Manchester, M16 7HU",
      "county": "",
      "phone": "07733596180",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230390,
      "name": "Estina Simpson",
      "address": "25 Farrant Road, Manchester, Greater Manchester, M12 4PD",
      "county": "Greater Manchester",
      "phone": "0161 225 7864 / 07974 152 352, 0780 675 5822 Charlene (Dght)",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230113,
      "name": "Rajinder Singh",
      "address": "25 Wadebridge Avenue, M23 9LS, Manchester, Greater Manchester, M23 9LS",
      "county": "Greater Manchester",
      "phone": "07826631321",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230573,
      "name": "Helen Smallman",
      "address": "4 Millom Avenue, Northern Moor, Manchester, M23 0DB",
      "county": "",
      "phone": "07523302230, 07926385769 - Micheal",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 11,
      "name": "Margaret Smith",
      "address": "4 Fairmead Road, Manchester, Lancashire, M23 0DS",
      "county": "Lancashire",
      "phone": "0161 998 2319",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 100,
      "name": "Margaret Smith",
      "address": "35 Grove Lane, Didsbury, M20 6UF",
      "county": "",
      "phone": "07752526356",
      "type": "BLOCK",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230278,
      "name": "Grace Smith",
      "address": "16 Fouracres Road Manchester , Manchester, M23 1FG",
      "county": "",
      "phone": "07848860446, 07404941060",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230433,
      "name": "Deborah Smith",
      "address": "21 Berigan Close, Manchester, M12 4QT, Manchester, M12 4QT",
      "county": "",
      "phone": "0161 273 3707",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230389,
      "name": "Edna  Smith",
      "address": "3 Forber Crescent, , Manchester, Greater Manchester, M18 7PU",
      "county": "Greater Manchester",
      "phone": "0161 231 3727, 07817 830490 (Daughter)",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230175,
      "name": "Barbara Smythe",
      "address": "Flat 44, Westfields, Hall Lane, M23 1LP , Manchester, M23 1LP",
      "county": "",
      "phone": "0161 945 1113, 07399525026",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 109,
      "name": "Duncan Sneddon",
      "address": "Flat 2, Mayes Court, Sheringham Road, Manchester, M14 6UT",
      "county": "",
      "phone": "07704739931",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230307,
      "name": "Stanislawa Maria Sobierajska",
      "address": "5 Wensley Drive, Withington, M20 3DD, Manchester, M20 3DD",
      "county": "",
      "phone": "0161 445 3415",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 10,
      "name": "George Sparrow",
      "address": "Flat 16, Adastral Court, Wilbraham Road, Manchester, Lancashire, M21 0UF",
      "county": "Lancashire",
      "phone": "02380772698, 07771565697",
      "type": "Private",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230120,
      "name": "Dorothy Spragg",
      "address": "22 Oakhouse Drive, M21 8EN, Manchester, Greater Manchester, M21 8EN",
      "county": "Greater Manchester",
      "phone": "0161 286 5407, 07758090765",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230285,
      "name": "Maureen Stanley",
      "address": "443 Greenwood Road, M22 9RB, Manchester, M22 9RB",
      "county": "",
      "phone": "0161 307 8114, 07789200687",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230532,
      "name": "Dorris Stephens",
      "address": "13 Longlevens Road, Manchester, M22 1UQ, Manchester, M22 1UQ",
      "county": "",
      "phone": "0161 437 6267, 07697363089",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230143,
      "name": "Annette Stepsys",
      "address": "5 Floyd Avenue, M21 7LU, Manchester, Greater Manchester, M21 7LU",
      "county": "Greater Manchester",
      "phone": "0161 280 5703",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230455,
      "name": "Alicja Stoker",
      "address": "153 College Road, Manchester, M16 0AA, Manchester, M16 0AA",
      "county": "",
      "phone": "0161 862 0631, 07576368975",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230437,
      "name": "Kirsty Stoner",
      "address": "79 Langdale Avenue, Manchester, M19 3WS, Manchester, M19 3WS",
      "county": "",
      "phone": "07737579050",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230611,
      "name": "Pauline Straiton",
      "address": "81 Doncaster Avenue,Withington, Withington, M20 1DN",
      "county": "",
      "phone": "07899 667158, 07899 667158",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230683,
      "name": "Giselheid  Stransky",
      "address": "Apartment 3, 7 Dundragon Gardens , Didsbury, M20 2EJ",
      "county": "",
      "phone": "0161 312 2379",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230649,
      "name": "Michael W Stringfellow",
      "address": "19 Goodwood Avenue , Manchester, M23 9JQ",
      "county": "",
      "phone": "0161 962 6159",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "Customer has gone into a hospice.",
      "move": "Change Status"
    },
    {
      "_id": 230391,
      "name": "Margaret Strutt",
      "address": "64 Kingfisher Close, Manchester, Lancashire, M12 4PW",
      "county": "Lancashire",
      "phone": "07961 185 240 Daughter Tina, 0161 274 3571",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "sfda",
      "move": "Change Status"
    },
    {
      "_id": 230404,
      "name": "Tonggang  Sun",
      "address": "2 Cavanagh Close, Manchester, Greater Manchester, M13 9DF",
      "county": "Greater Manchester",
      "phone": "0161 425 4753, Yue Chun Song ( 07825335946)",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 84,
      "name": "Mohammed Tahir",
      "address": "403 Wilbraham Road, Chorlton Cum Hardy, Manchester, England, M21-0UT",
      "county": "England",
      "phone": "Mohammed Arshad-07816888603",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 49,
      "name": "Thelma Takacs",
      "address": "61 Royalthorn Road, Manchester, M22 8DL",
      "county": "",
      "phone": "0161 945 2597",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 9,
      "name": "Phil Taylor",
      "address": "1 Clifton Road, Manchester, Lancashire, M21 8UX",
      "county": "Lancashire",
      "phone": "01618817986, 07784646586",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230133,
      "name": "Pamela Taylor",
      "address": "41 Bideford Drive, Royal Oak, M23 0QH, Royal Oak, Manchester, M23 0QH",
      "county": "Manchester",
      "phone": "0161 945 3685, Puala Bell-sister-07544501038",
      "type": "MCC SPOT,  Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230292,
      "name": "Susan Taylor",
      "address": "Flat 15 Alderfield House, Alderfield Road, M21 9HJ, Manchester, M21 9HJ",
      "county": "",
      "phone": "0161 882 0984, 07732316413",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230393,
      "name": "Millicent Taylor",
      "address": "3 Hutton Walk, , Manchester, Lancashire, M13 9SL",
      "county": "Lancashire",
      "phone": "0161 273 1229 , 07966133341 - Son Mike",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230473,
      "name": "TEST TEST",
      "address": "19 BRUNTWOOD LANE CHEADLE , MANCHESTER, SK8 1HS",
      "county": "",
      "phone": "01613122379, 07427632049",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 102,
      "name": "Geoffrey Thomas-Shaw",
      "address": "Flat 5, Holly Court, Palatine Road M20 3JE, Withington, M20 3JE",
      "county": "",
      "phone": "07803047102, Francis - 07415867117",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230179,
      "name": "James Thompson",
      "address": "31 Arnfield Road, Withington, M20 4AQ, Manchester, M20 4AQ",
      "county": "",
      "phone": "0161 445 6648",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230557,
      "name": "David Thompson",
      "address": "Flat 2 Sycamore Court, 58 Dudley Road, Manchester, M16 8FL",
      "county": "",
      "phone": "07851439886, 01229834190 - Patricia",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "social worker named Sunmi called mentioning that he was passed away dated 12-09-2024. call came through on 23-09-2024",
      "move": "Change Status"
    },
    {
      "_id": 230536,
      "name": "Wilfred A Tierney",
      "address": "15 Chard Drive, Woodhouse Park, Manchester, M22 1WG",
      "county": "",
      "phone": "07933103397",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230341,
      "name": "Brian Toner",
      "address": "57 Newhey Road, Benchill, M22 9NB, Manchester, M22 9NB",
      "county": "",
      "phone": "07462975471",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230692,
      "name": "Bridget  Toner",
      "address": "33 Morley Avenue, Fallowfield, , Manchester, M14 7HB",
      "county": "",
      "phone": "0161 613 1079",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230490,
      "name": "Melinda Towey",
      "address": "235 Wythenshawe Road, Manchester, M23 9DE",
      "county": "",
      "phone": "0161 902 9463, friend Susan - 0161 929 8898",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230572,
      "name": "Mr Training",
      "address": "517 Wilbraham Rd, Chorlton-cum-Hardy, M21 0UF, Manchester, Lancashire, M21 0UF",
      "county": "Lancashire",
      "phone": "0161 312 2379",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230527,
      "name": "Brenda Joyce Trigg",
      "address": "24 Longlevens Road, Manchester, M22 1BA, Manchester, M22 1BA",
      "county": "",
      "phone": "07986560222, 07368229168",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230667,
      "name": "Nicola Rachel  Tyson",
      "address": "3 Westbrook Square, M12 5PU, Manchester, Lancashire, M12 5PU",
      "county": "Lancashire",
      "phone": "07913800311, Sister Anna - 07956373557",
      "type": "Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230305,
      "name": "Zain Ul Abdin",
      "address": "11 Bournelea Avenue, Burnage, Manchester, M19 1AE",
      "county": "",
      "phone": "07859080408",
      "type": "",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230199,
      "name": "Islam UL-Chaudhri",
      "address": "19cGresty Avenue, Manchester, M22 5JQ, Manchester, M22 5JQ",
      "county": "",
      "phone": "07775884251, 07514042655",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230171,
      "name": "Shehzad Ul-Haq",
      "address": "172 Peel Hall Road, M22 5HD, Wythenshawe, M22 5HD",
      "county": "",
      "phone": "07908107866",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230350,
      "name": "Azhra Sultana Ul-Haq",
      "address": "3 Victoria Road, Whalley Range, M16 8GP, Manchester, M16 8GP",
      "county": "",
      "phone": "07860567429, 07802618856",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 8,
      "name": "Janet  Valentine",
      "address": "2 Stelfox Avenue, Manchester, Lancashire, M14 7DD",
      "county": "Lancashire",
      "phone": "0161 2245497",
      "type": "Man CCG,  Man CCG,  Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 7,
      "name": "Yvonne Van Bergeijk",
      "address": "10 Ponsonby Road, Stretford, Lancashire, , Manchester, Lancashire, M32 0DU",
      "county": "Lancashire",
      "phone": "07790476989",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 6,
      "name": "Munwar Vasi",
      "address": "15 Elsmore Road, Manchester, Lancashire, M14 7FP",
      "county": "Lancashire",
      "phone": "07719303003",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230595,
      "name": "David Vaughan",
      "address": "42 Lindwall Close, M23 0EF, Manchester, Lancashire, M23 0EF",
      "county": "Lancashire",
      "phone": "07368491462",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230166,
      "name": "Irene Vernon",
      "address": "7 Portrush Road, M22 5QP, Manchester, M22 5QP",
      "county": "",
      "phone": "07853926811",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230574,
      "name": "Angela Vernon",
      "address": "2 Rosset Avenue, Manchester, M22 0WW",
      "county": "",
      "phone": "07956164509",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230489,
      "name": "Anne Vickers",
      "address": "Flat 4 Alton Towers, 180-182 Withington Road, Whalley Range, M16 8WA",
      "county": "",
      "phone": "0161 860 6277",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230204,
      "name": "Stanley Gordon Viles",
      "address": "9 Greenway Northenden , Manchester, M22 4LW",
      "county": "",
      "phone": "0161 945 4828, 07933 744516",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230434,
      "name": "Louise Vincent",
      "address": "25 Wellington Road, Whalley Range, M16 8EX, Manchester, M16 8EZ",
      "county": "",
      "phone": "07912660536",
      "type": "MCC SPOT",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230435,
      "name": "Louise Vincent",
      "address": "25 Wellington Road, Whalley Range , Manchester, County, M16 8EX",
      "county": "County",
      "phone": "07593429936, 07912660536",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230138,
      "name": "Paul Vital Mbila",
      "address": "28 Brotherton Close, M15 4ET, Manchester, Greater Manchester, M15 4ET",
      "county": "Greater Manchester",
      "phone": "07399 704722, 07927 363570",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 47,
      "name": "Della Von Arx",
      "address": "Flat 2B, 145 Hale Road, Hale, WA15 8RT",
      "county": "",
      "phone": "0161 928 2017, 07791336619",
      "type": "NHS Trafford",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 98,
      "name": "Leonard Walker",
      "address": "47 Whitnall Street, Manchester, M16 7NH",
      "county": "",
      "phone": "0161 2261877, Gaynor-(Daughter)-07510147381",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "Block POC, Comisioned with Area Provider",
      "move": "Change Status"
    },
    {
      "_id": 99,
      "name": "Keith Walker",
      "address": "12 Countess Road, Didsbury, M20 6RS",
      "county": "",
      "phone": "0161 448 0575",
      "type": "BLOCK",
      "status": "Duplicated",
      "comment": "Moved off block",
      "move": "Change Status"
    },
    {
      "_id": 230109,
      "name": "Sadie  Walsh",
      "address": "2 Shawfield Close, M14 7FL, Manchester, Greater Manchester, M14 7FL",
      "county": "Greater Manchester",
      "phone": "0161 224 3316",
      "type": "Private,  MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230576,
      "name": "Martha Walsh",
      "address": "38 Garswood Road, Fallowfield, Manchester, M14 7LL",
      "county": "",
      "phone": "0161 613 1792",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230317,
      "name": "Anthony Elvis Warburton",
      "address": "Flat 52 Platt Court, Wilmslow Road, M14 5LT, Manchester, M14 5LT",
      "county": "",
      "phone": "07540451460",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 94,
      "name": "Algernon Ward",
      "address": "17 Rolls Crescent, Manchester, M15 5JX",
      "county": "",
      "phone": "0161 232 9892",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230180,
      "name": "Melvina Ward",
      "address": "31 Fairman Street, M16 7LX, Manchester, M16 7LX",
      "county": "",
      "phone": "0161 232 9368, 07486488295",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230194,
      "name": "Hilda Pamela Ward",
      "address": "17 Rolls Crescent, Hulme, M15 5JX, Manchester, M15 5JX",
      "county": "",
      "phone": "0161 232 9892",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230403,
      "name": "William  Warde",
      "address": "121 Stamford Road, Manchester, Lancashire, M13 0SP",
      "county": "Lancashire",
      "phone": "0161 2254954",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 5,
      "name": "Eunice Wardle",
      "address": "46 Haughton Drive,, Manchester, Lancashire, M22 4EQ",
      "county": "Lancashire",
      "phone": "0161 998 0949",
      "type": "Man CCG,  Man CCG",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230609,
      "name": "Islin Warren",
      "address": "63 Langport Avenue, Longsight, Manchester, M12 4NR",
      "county": "",
      "phone": "0161 273 3156, Chris (Son) - 07957504888",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230294,
      "name": "Stella Mary  Waterhouse",
      "address": "1 Fairway Avenue, Wythenshawe, M23 9JP, Wythenshawe, M23 9JP",
      "county": "",
      "phone": "0161 973 7136, 07907065234",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230570,
      "name": "Paula Watson",
      "address": "1 Tonyburns Gardens, Newall Green, Manchester, M23 2SF",
      "county": "",
      "phone": "0161 282 3743",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230561,
      "name": "Renee Watt",
      "address": "214 Sale Road, Northern Moor, Manchester, M23 0FR",
      "county": "",
      "phone": "0161 666 3297, 07772572000 - Loreta",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230463,
      "name": "June Watts",
      "address": "2 Withenfield Road, Manchester, M23 9BS, Manchester, M23 9BS",
      "county": "",
      "phone": "0161 946 1397, 07958560983",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 78,
      "name": "Keith Wayne",
      "address": "15 Thurlwood Avenue, Withington, M20 1DZ",
      "county": "",
      "phone": "0161 434 9787",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230446,
      "name": "Valerie Webster",
      "address": "5 Townfield Walk, Hulme, Manchester, M15 4DH, Manchester, M15 4DH",
      "county": "",
      "phone": "0161 264 7704",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230357,
      "name": "Christine Welsby",
      "address": "Flat 6 22a Greenbrow Road, Manchester, M23 1EX, Manchester, M23 1EX",
      "county": "",
      "phone": "0161 614 0087, 07852491369",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230657,
      "name": "Robert  Welsby",
      "address": "Flat 62 Elmswood Park, 31 Elmswood Avenue , Manchester, Lancashire, M14 4TA",
      "county": "Lancashire",
      "phone": "0161 511 2660, Keith (Son) 07437769962",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230259,
      "name": "Jean White",
      "address": "147 Firbank Road, M23 2YP, Manchester, M23 2YP",
      "county": "",
      "phone": "0161 998 1565",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230405,
      "name": "Kevin White",
      "address": "33 Addison Close , Manchester, Greater Manchester, M13 9SB",
      "county": "Greater Manchester",
      "phone": "0161 860 5400, Ann (Spouse) - 07528707614",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230554,
      "name": "Audrey M Whiteley",
      "address": "16 Patterdale Road, Northenden, Wythenshawe, M22 4WG",
      "county": "",
      "phone": "07930482205",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230596,
      "name": "Donna  Whitney",
      "address": "5 Napier Road, Chorlton , Manchester, M21 8AW",
      "county": "",
      "phone": "0161 881 1600, 07751088476",
      "type": "BLOCK",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 31,
      "name": "Ruth Wilcox",
      "address": "Flat 8, Arden Court, 1 Oakhouse Drive, Manchester, Lancashire, M21 8EW",
      "county": "Lancashire",
      "phone": "0161 881 2409",
      "type": "IB Budget",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 66,
      "name": "Ruth Wilcox",
      "address": "Flat 8 Arden Court, 1 Oakhouse Drive, Manchester, M21 8EW",
      "county": "",
      "phone": "0161 881 2409",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 70,
      "name": "Meiriona Wiliam",
      "address": "Flat 21, Ryland House, 18 Edge Lane, Manchester, M21 9JP",
      "county": "",
      "phone": "07845608885",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230162,
      "name": "Racheal Wilkinson",
      "address": "11 Belwood Road, Manchester, Lancashire, M21 8BS",
      "county": "Lancashire",
      "phone": "07968100400, 07767488318",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230359,
      "name": "Margaret Theresa Wilkinson",
      "address": "Flat 24 Westfields, 212 Hall Lane, M23 1LP, Manchester, M23 1LP",
      "county": "",
      "phone": "0161 222 5703, 07801341183",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 69,
      "name": "Ruth Williams",
      "address": "49 Dudley Road, Manchester, M16 8FW",
      "county": "",
      "phone": "Tim Plant-07946060930",
      "type": "MCC SPOT",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230188,
      "name": "Iditha Williams",
      "address": "272 Great Western Street M14 4HT, Manchester, Greater Manchester, M14 4HT",
      "county": "Greater Manchester",
      "phone": "0161 342 0117",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230265,
      "name": "Cheryl Williams",
      "address": "Flat 24 Moorside 6 Robert Owen Gardens, Manchester, M22 4DD",
      "county": "",
      "phone": "07887684743, 07943174890",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230273,
      "name": "Deborah  Williams",
      "address": "72 Bleak Hey Road, Sharston, M22 5ES, Manchester, M22 5ES",
      "county": "",
      "phone": "0161 498 0691",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230320,
      "name": "Ula Lee E Williams",
      "address": "7 Linby Street, Hulme, M15 5AN, Manchester, M15 5AN",
      "county": "",
      "phone": "0161 718 8290, 07306387605",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230452,
      "name": "Linda Williams",
      "address": "191 Greenbrow Road, Newall Green, M23 2TA, Manchester, M23 2TA",
      "county": "",
      "phone": "07707579451, 07873677553",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230584,
      "name": "Cheryl Williams",
      "address": "24 Robert Owen Gardens, Manchester, M22 4DD",
      "county": "",
      "phone": "07887684743, 07903119256",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230580,
      "name": "William Edmond Wilson",
      "address": "12 Chipping Square, Longsight, Manchester, M12 5AX",
      "county": "",
      "phone": "07555929314",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230298,
      "name": "Paul Stephen  Winstanley",
      "address": "15 Oakhouse Drive, Chorlton, M21 8EN, Manchester, M21 8EN",
      "county": "",
      "phone": "07501486309",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 4,
      "name": "Dorothea Wood",
      "address": "Flat 8, 2 Reilly Street, Manchester, Lancashire, M15 5NB",
      "county": "Lancashire",
      "phone": "0161 342 0068, 07748 348562",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230663,
      "name": "Barry  Wood",
      "address": "12 St Brannocks Road, Manchester, Lancashire, M21 0UP",
      "county": "Lancashire",
      "phone": "07776076646, 0161 881 1375, Rachel (Daughter) 07786323622",
      "type": "Man CCG",
      "status": "RIP",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230462,
      "name": "Jennifer  Woolfe",
      "address": "26 Adastral House, Wilbraham Road, , Manchester, M21 0UD",
      "county": "",
      "phone": "0161 964 6053, 07856697237",
      "type": "Private",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230488,
      "name": "Mary Wrega",
      "address": "95 Portway, Wythenshawe, M22 1XB, Manchester, M22 1XB",
      "county": "",
      "phone": "0161 436 1983",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230311,
      "name": "Joan Yates",
      "address": "54 Rowarth Road, Manchester, M23 2UP, Manchester, M23 2UP",
      "county": "",
      "phone": "07413929239",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230599,
      "name": "Jacqueline  Youd",
      "address": "5 ABRAM CLOSE, MANCHESTER, M14 7DB",
      "county": "",
      "phone": "07925907035, 07925907035",
      "type": "",
      "status": "Duplicated",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230600,
      "name": "Jacqueline  Youd",
      "address": "5 Abram Close, Fallowfield , Manchester, M14 7DB",
      "county": "",
      "phone": "07925907035, Ian (Son) - 07787540757",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230135,
      "name": "Sabiha Younis",
      "address": "13 Wallasey Avenue, Fallowfield, M14 7AL, Manchester, M14 7AL",
      "county": "",
      "phone": "Siham - daughter - 07738535594",
      "type": "MCC SPOT",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": 230425,
      "name": "Dorothy Zollner",
      "address": "52 Carrswood Road, Brooklands, M23 9HQ, Manchester, M23 9HQ",
      "county": "",
      "phone": "07845234660, 07466338944",
      "type": "BLOCK",
      "status": "Archived",
      "comment": "",
      "move": "Change Status"
    },
    {
      "_id": "",
      "name": "",
      "address": "",
      "county": "",
      "phone": "",
      "type": "",
      "status": "",
      "comment": "",
      "move": ""
    }
  ]

  const pendingCustomers = [
    {
      "_id": 230655,
      "name": "Graham  Kelly",
      "address": "36 Orton Road , Manchester, Lancashire, M23 0LJ",
      "tags": "",
      "status": "In Hospital",
      "daysInTable": 38,
      "actionCompleted": "0/1  (0%)",
      "statusComment": "",
      "move": "Change Status"
    },
    {
      "_id": 72,
      "name": "Marjorie Mciver",
      "address": "Flat 29 Arden Court, 1 Oakhouse Drive, Manchester, M21 8EW",
      "tags": "",
      "status": "In Hospital",
      "daysInTable": 32,
      "actionCompleted": "0/1  (0%)",
      "statusComment": "",
      "move": "Change Status"
    },
    {
      "_id": 230697,
      "name": "John Robert MOTH",
      "address": "Flat 10, Westfields, 212 Hall Lane, Baguley, Lancashire, M23 1LP",
      "tags": "",
      "status": "In Hospital",
      "daysInTable": 26,
      "actionCompleted": "0/1  (0%)",
      "statusComment": "Admitted to hospital due to a fall",
      "move": "Change Status"
    },
    {
      "_id": 230673,
      "name": "Kalsoom Ul Haque",
      "address": "10 Hardshaw Close , Manchester, M13 9TN",
      "tags": "",
      "status": "Pending",
      "daysInTable": 35,
      "actionCompleted": "0/1  (0%)",
      "statusComment": "",
      "move": "Change Status"
    }
  ]

  const pendingRows: CustomerRow[] = pendingCustomers.map((c) => ({
    _id: c._id,
    name: c.name ?? "",
    address: c.address ?? "",
    area: "", // Pending data has no area
    phone: [], // Pending data has no phone
    dob: "", // Pending data has no DOB
    tags: c.tags ? [c.tags] : [],
    status: c.status,
    type: "", // Pending data has no type
    details: c.statusComment ?? null,
    daysInTable: c.daysInTable,
    actionCompleted: c.actionCompleted,
    statusComment: c.statusComment,
    move: c.move,
  }));

  const archivedRows: CustomerRow[] = archivedCustomer.map((c) => ({
    _id: c._id ?? "",
    name: c.name ?? "",
    address: c.address ?? "",
    area: c.county ?? "",
    phone: c.phone ? [String(c.phone)] : [], // ensure it's string[]
    status: c.status ?? "Archived",
    type: c.type ?? "",
    details: c.comment ?? null, // matches string | null
  }));

  // Define the shape of one customer row
  interface CustomerRow {
    _id: any;
    userId?: string;
    name: string;
    lastName?: string;
    address: string;
    phone: any;
    dob?: string;
    tags?: string[] | string;
    status: string;
    schedule?: string;
    councilId?: any | null;
    createdAt?: string;
    type: string;
    email?: string;
    company?: string;
    totalOrders?: number;
    isActive?: boolean;
    area: string;
    details: string | null;


    // Pending-specific fields
    daysInTable?: number;
    actionCompleted?: string;
    statusComment?: string;
    move?: string;
  }


  const renderActionButton = (status?: string) => {
    if (activeTab === 1) {
      return (
        <Button variant="contained" size="small" color="success">
          Approve
        </Button>
      );
    }
    if (activeTab === 2) {
      return (
        <Button variant="outlined" size="small" color="primary">
          Restore
        </Button>
      );
    }
    if (status === "Active") {
      return (
        <Button variant="outlined" size="small" color="error">
          Archive
        </Button>
      );
    }
    return null;
  };

  const avatarColors = [
    "#F44336", // red
    "#E91E63", // pink
    "#9C27B0", // purple
    "#3F51B5", // indigo
    "#2196F3", // blue
    "#03A9F4", // light blue
    "#009688", // teal
    "#4CAF50", // green
    "#FF9800", // orange
    "#FF5722", // deep orange
  ];

  const columns: GridColDef<CustomerRow>[] = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 70,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const name = params.row.name || "";
        const firstLetter = name.charAt(0)?.toUpperCase() || "?";
        const colorIndex = typeof params.row._id === "number"
          ? params.row._id % avatarColors.length
          : 0;
        const avatarColor = avatarColors[colorIndex];
        return (
          <Avatar sx={{ bgcolor: avatarColor, color: "#fff" }}>
            {firstLetter}
          </Avatar>
        );
      },
    },
    { field: "_id", headerName: "Customer ID", width: 120 },
    { field: "name", headerName: "Full Name", width: 180 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "area", headerName: "Area", width: 120 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "dob", headerName: "DOB", width: 110 },
    { field: "type", headerName: "Job Type", width: 130 },
    {
      field: "tags",
      headerName: "Tags",
      width: 180,
      renderCell: (params) =>
        <>
          {
            params.value != "" ? <Chip label={params.value} size="small" color="primary" variant="outlined" className="mr-1" /> : null
          }

        </>



    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={
            params.value === "Active"
              ? "success"
              : params.value === "Pending"
                ? "warning"
                : "default"
          }
        />
      ),
    },
    {
      field: "schedule",
      headerName: "Schedule",
      width: 80,
      renderCell: (params) => (
        <IconButton size="small" color="success" className="relative">
          <p className={params.value == "N" ? "text-white bg-red-400 w-4 h-4 p-0 rounded-full flex justify-center items-center text-[10px] absolute top-0 right-0" : "text-white bg-green-400 w-4 h-4 p-0 rounded-full flex justify-center items-center text-[10px] absolute top-0 right-0"}>{params.value}</p>
          <Calendar />
        </IconButton>
      ),
    },
    {
      field: "details",
      headerName: "Details",
      width: 80,
      renderCell: () => (
        <IconButton onClick={() => navigate("/customer/details")} size="small" color="success">
          <List />
        </IconButton>
      ),
    },
    { field: "councilId", headerName: "Council ID", width: 120 },
    {
      field: "actions",
      headerName: "Move",
      width: 120,
      sortable: false,
      renderCell: (params) => renderActionButton(params.row.status),
    },
  ];

  const pendingColumns: GridColDef<CustomerRow>[] = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 70,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const name = params.row.name || "";
        const firstLetter = name.charAt(0)?.toUpperCase() || "?";
        const colorIndex = typeof params.row._id === "number"
          ? params.row._id % avatarColors.length
          : 0;
        const avatarColor = avatarColors[colorIndex];
        return (
          <Avatar sx={{ bgcolor: avatarColor, color: "#fff" }}>
            {firstLetter}
          </Avatar>
        );
      },
    },
    { field: "_id", headerName: "Customer ID", width: 120 },
    { field: "name", headerName: "Full Name", width: 180 },
    { field: "address", headerName: "Address", width: 250 },
    {
      field: "tags",
      headerName: "Tags",
      width: 180,
      renderCell: (params) => {
        const tags = Array.isArray(params.value)
          ? params.value
          : params.value
            ? [params.value]
            : [];
        return (
          <>
            {tags.map((t: string, i: number) => (
              <Chip
                key={i}
                label={t}
                size="small"
                color="primary"
                variant="outlined"
                className="mr-1"
              />
            ))}
          </>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={
            params.value === "Active"
              ? "success"
              : params.value === "Pending"
                ? "warning"
                : "default"
          }
        />
      ),
    },
    { field: "daysInTable", headerName: "Days in Table", width: 130 },
    { field: "actionCompleted", headerName: "Action Completed", width: 150 },
    { field: "statusComment", headerName: "Status Comment", width: 200 },
    {
      field: "move",
      headerName: "Move",
      width: 150,
      sortable: false,
      renderCell: (params) => renderActionButton(params.row.status),
    },
  ];

  const archivedColumns: GridColDef<CustomerRow>[] = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 70,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const name = params.row.name || "";
        const firstLetter = name.charAt(0)?.toUpperCase() || "?";
        const colorIndex = typeof params.row._id === "number"
          ? params.row._id % avatarColors.length
          : 0;
        const avatarColor = avatarColors[colorIndex];
        return (
          <Avatar sx={{ bgcolor: avatarColor, color: "#fff" }}>
            {firstLetter}
          </Avatar>
        );
      },
    },
    { field: "_id", headerName: "Customer ID", width: 120 },
    { field: "name", headerName: "Full Name", width: 180 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "area", headerName: "Area", width: 120 },
    { field: "phone", headerName: "Phone", width: 200 },
    {
      field: "status", headerName: "Status", width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === "Active" ? "success" : "default"}
        />
      ),
    },
    { field: "comment", headerName: "comments", width: 200 },
    {
      field: "actions",
      headerName: "Move",
      width: 120,
      sortable: false,
      renderCell: (params) => renderActionButton(params.row.status),
    },
  ];

  // Apply search filter
  const filteredRows = userData?.filter((row: CustomerRow) => {
    // Search filter
    const matchesSearch =
      row.name?.toLowerCase().includes(search.toLowerCase()) ||
      row.address?.toLowerCase().includes(search.toLowerCase())
    // row.phone?.some((p) => p.includes(search));

    if (!matchesSearch) return false;

    // Tab filter
    if (activeTab === 0) return row.status === "Active";
    if (activeTab === 1) return row.status === "Pending";
    if (activeTab === 2) return row.status === "Archived";
    return true; // activeTab === 3 => All Customers
  });



  // All customers = combine active + pending + archived
  const allRows: CustomerRow[] = [
    ...filteredRows,
    ...pendingRows,
    ...archivedRows,
  ];


  const getRowsForTab = () => {
    switch (activeTab) {
      case 0:
        return filteredRows;
      case 1:
        return pendingRows;
      case 2:
        return archivedRows;
      case 3:
        return allRows;
      default:
        return [];
    }
  };

  const displayedRows = getRowsForTab();



  // Dynamic heading + subtitle based on tab
  const tabTitles = [
    {
      title: "Active Customers",
      subtitle: "Manage all currently active customers.",
    },
    {
      title: "Pending Customers",
      subtitle: "Approve or reject pending customer requests.",
    },
    {
      title: "Archived Customers",
      subtitle: "Restore previously archived customers.",
    },
    { title: "All Customers", subtitle: "View all customers in the system." },
  ];

  return (
    <Box p={2}>
      {/* Heading + Subtitle */}
      <Box mb={2}>
        <Typography variant="h5" fontWeight="bold">
          {tabTitles[activeTab].title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tabTitles[activeTab].subtitle}
        </Typography>
      </Box>

      {/* Header Controls */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        {/* Tabs Left */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ minHeight: "44px" }}
        >
          <Tab label="Active Customers" />
          <Tab label="Pending Customers" />
          <Tab label="Archived Customers" />
          <Tab label="All Customers" />
        </Tabs>

        {/* Search Middle */}
        <div className="relative">
          <button className="absolute -translate-y-1/2 left-4 top-1/2">
            <svg
              className="fill-gray-500 dark:fill-gray-400"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                fill=""
              />
            </svg>
          </button>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search or type command..."
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
          />

          <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
            <span> ⌘ </span>
            <span> K </span>
          </button>
        </div>

        {/* Buttons Right */}
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/addClient")}
          >
            + Add Customer
          </Button>
          <Button
            variant="outlined"
            onClick={handleExportClick}
            startIcon={<Download size={16} />}
          >
            Export
          </Button>
          <Menu
            anchorEl={exportAnchor}
            open={Boolean(exportAnchor)}
            onClose={handleExportClose}
          >
            <MenuItem onClick={handleExportClose}>
              <FileText size={16} className="mr-2" /> Export as CSV
            </MenuItem>
            <MenuItem onClick={handleExportClose}>
              <FileText size={16} className="mr-2" /> Export as Excel
            </MenuItem>
            <MenuItem onClick={handleExportClose}>
              <Printer size={16} className="mr-2" /> Print
            </MenuItem>
            <MenuItem onClick={handleExportClose}>
              <Copy size={16} className="mr-2" /> Copy
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Table */}

      {/* {activeTab === 2 ? (
        // 🔹 Archived Customers Tab
        <Box sx={{ height: "600px", width: "100%" }}>
          <DataGrid
            rows={archivedRows}
            columns={archivedColumns}
            getRowId={(row) => row._id}
            paginationMode="customer"
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            loading={loading}
            pageSizeOptions={[5, 10, 20]}
            getRowHeight={() => "auto"}
            sx={{
              "& .MuiDataGrid-cell": {
                whiteSpace: "normal",
                wordWrap: "break-word",
                lineHeight: "1.5 !important",
                alignItems: "flex-start",
                py: 1,
              },
              "& .MuiDataGrid-columnHeader": {
                whiteSpace: "normal",
                lineHeight: "1.5 !important",
              },
            }}
          />
        </Box>
      ) : activeTab === 1 ? <Box sx={{ height: "600px", width: "100%" }}>
        <DataGrid
          rows={pendingRows}
          columns={pendingColumns}
          getRowId={(row) => row._id}
          paginationMode="customer"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          loading={loading}
          pageSizeOptions={[5, 10, 20]}
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: "1.5 !important",
              alignItems: "flex-start",
              py: 1,
            },
            "& .MuiDataGrid-columnHeader": {
              whiteSpace: "normal",
              lineHeight: "1.5 !important",
            },
          }}
        />
      </Box> : (
        // 🔹 All Other Tabs (Active, Pending, All)
        <Box sx={{ height: "600px", width: "100%" }}>
          <DataGrid<CustomerRow>
            rows={filteredRows}
            columns={columns}
            getRowId={(row) => row._id}
            rowCount={metaData.total}
            paginationMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            loading={loading}
            pageSizeOptions={[5, 10, 20]}
            getRowHeight={() => "auto"}
            sx={{
              "& .MuiDataGrid-cell": {
                whiteSpace: "normal",
                wordWrap: "break-word",
                lineHeight: "1.5 !important",
                alignItems: "flex-start",
                py: 1,
              },
              "& .MuiDataGrid-columnHeader": {
                whiteSpace: "normal",
                lineHeight: "1.5 !important",
              },
            }}
          />
        </Box>
      )} */}


      <Box sx={{ height: "600px", width: "100%" }}>
        <DataGrid<CustomerRow>
          rows={displayedRows}
          columns={
            activeTab === 1
              ? pendingColumns     // Pending-specific columns
              : activeTab === 2
                ? archivedColumns    // Archived-specific columns
                : columns            // Active/All columns
          }
          getRowId={(row) => row._id}
          pagination
          pageSizeOptions={[5, 10, 20]}
          getRowHeight={() => "auto"}
          loading={loading}
          sx={{
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal",
              wordWrap: "break-word",
              lineHeight: "1.5 !important",
              alignItems: "flex-start",
              py: 1,
            },
            "& .MuiDataGrid-columnHeader": {
              whiteSpace: "normal",
              lineHeight: "1.5 !important",
            },
          }}
        />
      </Box>

    </Box>
  );
}
