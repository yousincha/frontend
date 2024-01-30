import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS 직접 불러오기

const DirectionsPage = () => {
  const [contentHeight, setContentHeight] = useState("700px");
  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      if (windowHeight > 700) {
        setContentHeight("100%");
      } else {
        setContentHeight("700px");
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    // Leaflet CSS를 동적으로 추가
    const leafletCSS = document.createElement("link");
    leafletCSS.href = "https://unpkg.com/leaflet/dist/leaflet.css";
    leafletCSS.rel = "stylesheet";
    document.head.appendChild(leafletCSS);

    // Leaflet 스크립트 동적으로 추가
    const leafletScript = document.createElement("script");
    leafletScript.src = "https://unpkg.com/leaflet/dist/leaflet.js";
    leafletScript.defer = true;
    leafletScript.async = true;
    document.head.appendChild(leafletScript);

    // Cleanup 함수
    return () => {
      document.head.removeChild(leafletCSS);
      document.head.removeChild(leafletScript);
    };
  }, []);
  useEffect(() => {
    if (typeof L !== "undefined") {
      // Leaflet이 로드된 경우에만 실행
      const map = L.map("direction-map").setView([37.4410259, 127.1721208], 20);

      // OpenStreetMap 타일 레이어 추가
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      // 마커 추가
      L.marker([37.4410259, 127.1721208], {
        icon: L.icon({
          iconUrl: "/images/marker-icon.png", // 로컬 이미지 경로
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "/images/marker-shadow.png", // 로컬 이미지 경로
          shadowSize: [41, 41],
        }),
      })
        .addTo(map)
        .bindPopup("VillivMicron Location")
        .openPopup();

      // 두 번째 지도 추가
      const map2 = L.map("direction-map2").setView(
        [36.890648, 127.1086008],
        20
      );

      // OpenStreetMap 타일 레이어 추가
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map2
      );

      // 마커 추가
      L.marker([36.890648, 127.1086008], {
        icon: L.icon({
          iconUrl: "/images/marker-icon.png", // 로컬 이미지 경로
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "/images/marker-shadow.png", // 로컬 이미지 경로
          shadowSize: [41, 41],
        }),
      })
        .addTo(map2)
        .bindPopup("Wintop Location")
        .openPopup();
      // 세 번째 지도 추가
      const map3 = L.map("direction-map3").setView(
        [21.0257026, 105.846185],
        20
      );

      // OpenStreetMap 타일 레이어 추가
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map3
      );

      // 마커 추가
      L.marker([21.0257026, 105.846185], {
        icon: L.icon({
          iconUrl: "/images/marker-icon.png", // 로컬 이미지 경로
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "/images/marker-shadow.png", // 로컬 이미지 경로
          shadowSize: [41, 41],
        }),
      })
        .addTo(map3)
        .bindPopup("Wavelet Location")
        .openPopup();
    } else {
      console.error("Leaflet is not defined.");
    }
  }, []);

  return (
    <div>
      <div
        className="directions-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        ABOUT US &gt; <span style={{ color: "navy" }}>오시는 길</span>
      </div>
      <div
        style={{
          marginLeft: "2rem",
          marginBottom: "4rem",
          height: contentHeight,
        }}
      >
        <div
          className="direction-body"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <div
            className="direction-info"
            style={{
              marginRight: "4rem",
              marginTop: "2rem",
            }}
          >
            <div
              className="info-title"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "navy",
              }}
            >
              본사
            </div>
            <div
              className="info-body"
              style={{ marginTop: "2rem", width: "300px" }}
            >
              <ul>
                <li>(우13201)</li>
                <li>경기도 성남시 중원구 갈마치로 302,</li>
                <li>성남우림라이온스밸리5차 B동</li>
                <li>604호~606호</li>
                <li>Tel: 031-731-4840 / Fax: 031-731-4839</li>
              </ul>
            </div>
          </div>
          <div
            id="direction-map"
            style={{
              height: "400px",
              width: "600px",
              border: "1px solid #ccc",
              marginTop: "2rem",
            }}
          ></div>
        </div>

        <div
          className="direction-body2"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <div
            className="direction-info2"
            style={{
              marginRight: "4rem",
              marginTop: "2rem",
            }}
          >
            <div
              className="info-title2"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "navy",
              }}
            >
              생산 공장
            </div>
            <div
              className="info-body2"
              style={{ marginTop: "2rem", width: "300px" }}
            >
              <ul>
                <li>(우31009)</li>
                <li>충남 천안시 서북구 성환읍 율금5길 119</li>
                <li>Tel: 041-557-7801 / Fax: 041-557-7805</li>
              </ul>
            </div>
          </div>
          <div
            id="direction-map2"
            style={{
              height: "400px",
              width: "600px",
              border: "1px solid #ccc",
              marginTop: "2rem",
            }}
          ></div>
        </div>
        <div
          className="direction-body3"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <div
            className="direction-info3"
            style={{
              marginRight: "4rem",
              marginTop: "2rem",
            }}
          >
            <div
              className="info-title3"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "navy",
              }}
            >
              베트남 연구소
            </div>
            <div
              className="info-body3"
              style={{ marginTop: "2rem", width: "300px" }}
            >
              <ul>
                <li>Floor 13,</li>
                <li>Hanoi Tower, 49 Hai Ba Trung Street,</li>
                <li>Tran Hung Dao Ward, </li>
                <li>Hoan Kiem District, Hanoi.</li>
                <li>Tel: 0379 463 986</li>
              </ul>
            </div>
          </div>
          <div
            id="direction-map3"
            style={{
              height: "400px",
              width: "600px",
              border: "1px solid #ccc",
              marginTop: "2rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DirectionsPage;
