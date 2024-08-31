// import React from "react";
// import { Grid, Card, Box,Typography } from "@mui/material";
// import UserGrowthChart from "./UserGrowthChart";
// import RevenueDistribution from "./RevenueChart";
// import TopStreamedSongs from "./TopStreamedChart";
// import BasicTable from "./DataTable";

// const Dashboard = () => {
//   return (
//     <Grid container style={{background: "linear-gradient(#E0FFFF, #E0FFFF, #13274F)"}}>
//       <Grid item container spacing={8} xs={12} justifyContent='center' style={{marginTop:4}}>
//         <Grid item>
//           <Card style={{ background: "linear-gradient(135deg, #191970, #000000)", borderRadius: "8px"}}>
//             <Box display="flex" justifyContent="center" alignItems='center' flexDirection="column" style={{ height: "100px", width: "240px" }}>
//               <Typography alignSelf='center' style={{ background: "linear-gradient(#ADD8E6, #00c6ff, #0072ff)",WebkitBackgroundClip: "text",  // Clip the background to the text
//           WebkitTextFillColor: "transparent",}} variant="h4">
//                 930
//               </Typography>
//               <Typography alignSelf='center' style={{color:'white'}}>
//                Active Users
//               </Typography>
//             </Box>
//           </Card>
//         </Grid>
//         <Grid item>
//         <Card style={{ background: "linear-gradient(135deg, #191970, #000000)", borderRadius: "8px"}}>
//             <Box display="flex" justifyContent="center" alignItems='center' flexDirection="column" style={{ height: "100px", width: "240px" }}>
//               <Typography alignSelf='center' style={{ background: "linear-gradient(#ADD8E6, #00c6ff, #0072ff)",WebkitBackgroundClip: "text",  // Clip the background to the text
//           WebkitTextFillColor: "transparent",}} variant="h4">
//                 930
//               </Typography>
//               <Typography alignSelf='center' style={{color:'white'}}>
//                 Total Users
//               </Typography>
//             </Box>
//           </Card>
//         </Grid>
//         <Grid item>
//         <Card style={{ background: "linear-gradient(135deg, #191970, #000000)", borderRadius: "8px"}}>
//             <Box display="flex" justifyContent="center" alignItems='center' flexDirection="column" style={{ height: "100px", width: "240px" }}>
//               <Typography alignSelf='center' style={{ background: "linear-gradient(#ADD8E6, #00c6ff, #0072ff)",WebkitBackgroundClip: "text",  // Clip the background to the text
//           WebkitTextFillColor: "transparent",}} variant="h4">
//                 930
//               </Typography>
//               <Typography alignSelf='center' style={{color:'white'}}>
//                 Total Streams
//               </Typography>
//             </Box>
//           </Card>
//         </Grid>
//         <Grid item>
//         <Card style={{ background: "linear-gradient(135deg, #191970, #000000)", borderRadius: "8px"}}>
//             <Box display="flex" justifyContent="center" alignItems='center' flexDirection="column" style={{ height: "100px", width: "240px" }}>
//               <Typography alignSelf='center' style={{ background: "linear-gradient(#ADD8E6, #00c6ff, #0072ff)",WebkitBackgroundClip: "text",  // Clip the background to the text
//           WebkitTextFillColor: "transparent",}} variant="h4">
//                 930
//               </Typography>
//               <Typography alignSelf='center' style={{color:'white'}}>
//                 Revenue
//               </Typography>
//             </Box>
//           </Card>
//         </Grid>
//         <Grid item>
//         <Card style={{ background: "linear-gradient(135deg, #191970, #000000)", borderRadius: "8px"}}>
//             <Box display="flex" justifyContent="center" alignItems='center' flexDirection="column" style={{ height: "100px", width: "240px" }}>
//               <Typography alignSelf='center' style={{ background: "linear-gradient(#ADD8E6, #00c6ff, #0072ff)",WebkitBackgroundClip: "text",  // Clip the background to the text
//           WebkitTextFillColor: "transparent",}} variant="h4">
//                 Sneha
//               </Typography>
//               <Typography alignSelf='center' style={{color:'white'}}>
//                Top Artist
//               </Typography>
//             </Box>
//           </Card>
//         </Grid>
//       </Grid>
//       <Grid item container spacing={4} xs={12} style={{padding:8}} justifyContent='center' >
//         <Grid item container direction="column" xs={6} spacing={4} >
//         <Grid item xs={2}>
//         <UserGrowthChart>

//         </UserGrowthChart>
//       </Grid>
     
//         </Grid>
      
//       <Grid item xs={3} style={{flexGrow: 1}}>
//       <RevenueDistribution >

//       </RevenueDistribution>
//       </Grid>
     
//      <Grid item xs={8}>
//     <TopStreamedSongs style={{height:'10%',flexGrow: 1}}>

//     </TopStreamedSongs>

//      </Grid>
// </Grid>
//       <Grid item xs={12}>
//       <BasicTable>

//       </BasicTable>
//       </Grid>
     
//     </Grid>
//   );
// };
// export default Dashboard;




import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Card,
  CardContent,
  Typography,
  Grid
} from '@mui/material';


const mockData = {
  totalUsers: 1000000,
  activeUsers: 750000,
  totalStreams: 5000000,
  revenue: 10000000,
  topArtist: "Taylor Swift",
  userGrowth: [
    { month: 'Jan', totalUsers: 800000, activeUsers: 600000 },
    { month: 'Feb', totalUsers: 850000, activeUsers: 650000 },
    { month: 'Mar', totalUsers: 900000, activeUsers: 700000 },
    { month: 'Apr', totalUsers: 950000, activeUsers: 725000 },
    { month: 'May', totalUsers: 1000000, activeUsers: 750000 },
  ],
  revenueDistribution: [
    { name: 'Subscriptions', value: 8000000 },
    { name: 'Advertisements', value: 2000000 },
  ],
  topSongs: [
    { name: 'Song A', streams: 500000 },
    { name: 'Song B', streams: 450000 },
    { name: 'Song C', streams: 400000 },
    { name: 'Song D', streams: 350000 },
    { name: 'Song E', streams: 300000 },
  ],
  recentStreams: [
    { songName: 'Song A', artist: 'Artist X', dateStreamed: '2023-05-01', streamCount: 1000, userId: 'user123' },
    { songName: 'Song B', artist: 'Artist Y', dateStreamed: '2023-05-02', streamCount: 950, userId: 'user456' },
    { songName: 'Song C', artist: 'Artist Z', dateStreamed: '2023-05-03', streamCount: 900, userId: 'user789' },
  ],
};

const Dashboard = () => {
  const [data, setData] = useState(mockData);

  useEffect(() => {
  
    setData(mockData);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Streamify Analytics Dashboard</Typography>
      
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        {[
          { title: 'Total Users', value: data.totalUsers.toLocaleString() },
          { title: 'Active Users', value: data.activeUsers.toLocaleString() },
          { title: 'Total Streams', value: data.totalStreams.toLocaleString() },
          { title: 'Revenue', value: formatCurrency(data.revenue) },
          { title: 'Top Artist', value: data.topArtist },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Data Visualization */}
      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        {/* User Growth Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>User Growth</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data.userGrowth}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
                  <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Revenue Distribution */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Revenue Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie dataKey="value" data={data.revenueDistribution} fill="#8884d8" label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Top 5 Streamed Songs */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Top 5 Streamed Songs</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.topSongs}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="streams" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Data Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>Recent Streams</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Song Name</TableCell>
                  <TableCell>Artist</TableCell>
                  <TableCell>Date Streamed</TableCell>
                  <TableCell>Stream Count</TableCell>
                  <TableCell>User ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.recentStreams.map((stream, index) => (
                  <TableRow key={index}>
                    <TableCell>{stream.songName}</TableCell>
                    <TableCell>{stream.artist}</TableCell>
                    <TableCell>{stream.dateStreamed}</TableCell>
                    <TableCell>{stream.streamCount}</TableCell>
                    <TableCell>{stream.userId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;