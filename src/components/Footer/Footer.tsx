import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="false" >
        <Box sx={{ flexDirection: 'column' }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              color="black"
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              CONTACT US
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary"  sx={{ display: 'flex', mb: 0.5 }}>
              <LocationOnIcon fontSize="small" />
              <Link href="https://www.google.com/maps/place/To%C3%A0+nh%C3%A0+TTC+Duy+T%C3%A2n" underline="none" color="text.secondary" sx={{ ml: 0.5, fontSize: "14px" }}>Vietnam, Hanoi, Cau Giay Ward, Duy Tan 19, TTC
                Building, 11th Floor</Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary"  sx={{ display: 'flex',  mb: 0.5  }}>
              <PhoneIcon fontSize="small" />
              <Link href="#" underline="none" color="text.secondary" sx={{ ml: 0.5, fontSize: "14px" }}>
                +84 (24) 3312-0103
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary"  sx={{ display: 'flex',  mb: 0.5  }}>
              <PublicIcon fontSize="small" />
              <Link href="https://www.vmogroup.com/" underline="none" color="text.secondary" sx={{ ml: 0.5, fontSize: "14px" }}>
                https://www.vmogroup.com
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary"  sx={{ display: 'flex',  mb: 0.5  }}>
              <EmailIcon fontSize="small" />
              <Link href="https://vmogroup.jp/" underline="none" color="text.secondary" sx={{ ml: 0.5, fontSize: "14px" }}>
                info@vmogroup.com
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: "14px" }}>
            {"© 2023 DU10 VMOJP. All rights reserved."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
