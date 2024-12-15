/* eslint-disable react/no-unknown-property */
import { Button, Grid, Typography } from "@mui/material"; // Ensure Grid is imported

export const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="bg-black text-white text-center mt-10"
        sx={{ backgroundColor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="ph-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              jobs
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="ph-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="ph-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="ph-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button className="ph-5" variant="h6" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; © 2023 Your Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by vivek.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <a
              href="https://github.com/Vivekmaurya1"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Vivekmaurya1
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
