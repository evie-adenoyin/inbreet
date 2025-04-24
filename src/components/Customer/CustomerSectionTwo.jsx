import React from "react";
import ReactApexChart from "react-apexcharts";
import { FiFeather, FiEye, FiSun } from "react-icons/fi";

import Image2 from "../../assets/Rectangle 12701.svg";
import styles from "./style.module.css";

const CustomerSectionTwo = () => {
  const CHART_DATA = {
    series: [35, 30, 35],

    options: {
      chart: { type: "donut", width: "100%", height: "100%" },
      legend: {
        show: false,
        position: "bottom",
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
      },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      fill: { colors: ["#69E6A6", "#0A2640", "#0DBBFC"] },
      states: {
        hover: { filter: { type: "lighten", value: 0.5 } },
        active: { filter: { type: "none", value: 0 } },
      },

      labels: [
        "35% -  Agile Development",
        "30% -  Investor bandwidth",
        "35% -  A/B testing ",
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "65%",
            labels: {
              show: true,
              name: { show: true },
              total: {
                show: false,
                showAlways: true,
              },
            },
          },
        },
      },
    },
  };
  const CUSTOMER_DATA = [
    {
      id: 1,
      icon: <FiFeather />,
      text: "We connect our customers with the best.",
    },
    {
      id: 2,
      icon: <FiEye />,
      text: "Advisor success customer launch party.",
    },
    {
      id: 3,
      text: "Business-to-consumer long tail.",
      icon: <FiSun />,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.customerDescription}>
        <span className={styles.content2}>
          {" "}
          We connect our customers with the best, and help them keep up-and stay
          open.
        </span>
        <div className={styles.customerDescriptionList2}>
          {CUSTOMER_DATA.map((item, key) => (
            <div key={key} className={styles.customerDescriptionListItem}>
              <div className={styles.customerDescriptionListItemBox}>
                <span>{item?.icon}</span>
                <span>{item?.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.customerImageContainer}>
        <img
          className={styles.customerImage}
          src={Image2}
          alt="CustomerImage"
        />

        <div className={styles.customerchartContainer2}>
          <div className={styles.chart2}>
            <div className={styles.chartFlow2}>
              <ReactApexChart
                options={CHART_DATA.options}
                series={CHART_DATA.series}
                type="donut"
                width="179px"
                height="200px"
              />
              <div className={styles.chartGroup2}>
                <div className={styles.percent}>
                  {" "}
                  <div className={styles.color}></div>{" "}
                  <span>35% - Agile Development</span>
                </div>
                <div className={styles.percent}>
                  {" "}
                  <div className={styles.color2}></div>{" "}
                  <span>30% - Investor bandwidth</span>
                </div>
                <div className={styles.percent}>
                  {" "}
                  <div className={styles.color3}></div>{" "}
                  <span>35% - A/B testing </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSectionTwo;
