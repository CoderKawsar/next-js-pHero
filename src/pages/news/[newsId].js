import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Image, Row } from "antd/lib";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import React from "react";

function NewsDetailPage({ news }) {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <Image src={news?.image_url} responsive alt="News Image" />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h2
              style={{
                fontSize: "28px",
              }}
            >
              {news?.title}
            </h2>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "100%",
              }}
            ></div>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0px",
              }}
            >
              <span>
                <CalendarOutlined />
                {news?.release_date}
              </span>
              <span>
                <CommentOutlined />
                {news?.comment_count}
              </span>
              <span>
                <ProfileOutlined />
                {news?.category}
              </span>
            </p>

            <p
              style={{
                fontSize: "20px",
              }}
            >
              {news?.description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NewsDetailPage;

NewsDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:5000/news/`);
//   const news = await res.json();

//   const paths = news.map((singleNews) => ({
//     params: { newsId: singleNews.id },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
//   const data = await res.json();

//   return {
//     props: {
//       news: data,
//     },
//   };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
};
