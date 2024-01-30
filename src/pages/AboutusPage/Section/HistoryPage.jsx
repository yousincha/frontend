import React from "react";

const HistoryPage = () => {
  const bodyContainerStyle = {
    marginBottom: "4rem",
  };

  const titleHistoryStyle = { marginLeft: "2rem" };

  const rowStyle = {
    marginTop: "2rem",
  };

  const tableRowStyle = {
    ...rowStyle, // 기존의 marginTop 스타일을 유지하면서
    display: "flex", // Flex 컨테이너로 변경
    marginBottom: "2rem", // 행 사이의 간격 추가
  };
  const yearCellStyle = {
    textAlign: "center",
    verticalAlign: "top",
    fontSize: "36px",
  };

  const contentCellStyle = {
    flex: "1", // 남은 공간을 모두 차지하도록 flex 설정
    verticalAlign: "top",
    padding: "10px",
  };
  const splitIntoRows = (data, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
      rows.push(data.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const data = [
    {
      year: "2012",
      events: [
        { text: "03월 빌리브마이크론㈜ 설립", highlight: false },
        {
          text: "05월 기업부설연구소 인가(한국산업기술진흥협회)",
          highlight: false,
        },
        { text: "08월 벤처기업 인증(기술보증기금)", highlight: false },
      ],
    },
    {
      year: "2013",
      events: [
        { text: "07월 자본금 증자 (300백만원)", highlight: false },
        {
          text: "10월 소프트웨어사업자 인가",
          highlight: false,
        },
        {
          text: "11월 미래창조과학부 ‘원천기술개발사업’ 사업 참여",
          highlight: false,
        },
        {
          text: "12월 국세청 주류진품 단말기 공급",
          highlight: false,
        },
      ],
    },
    {
      year: "2014",
      events: [
        {
          text: "04월 한국조폐공사 ‘동반성장을 위한 성과공유 계약",
          highlight: false,
        },
        {
          text: "06월 응급 비콘 제품 출시(경찰청)",
          highlight: false,
        },
        {
          text: "10월 방위사업청 과학화훈련장 병사 무선통신망 공급",
          highlight: false,
        },
        {
          text: "12월 건강보험공단 NFC 파손 태그 공급",
          highlight: false,
        },
      ],
    },
    {
      year: "2015",
      events: [
        { text: "05월 국립재난안전처 우수연구상 수상", highlight: false },
        {
          text: "07월 반도체 연구 사업 수주 – 디지탈무전기",
          highlight: false,
        },
        {
          text: "09월 KTC 주유기 조작방지 보안 모듈 개발/공급",
          highlight: false,
        },
        {
          text: "11월 동보장치/무선마을방송 직접 생산자 증명 획득",
          highlight: false,
        },
      ],
    },
    {
      year: "2016",
      events: [
        { text: "05월 11번가 스마트 O2O 쇼핑 단말기 출시", highlight: false },
        {
          text: "06월 와이파이 도어센서(응급버튼) 세계 최초 출시",
          highlight: false,
        },
        { text: "07월 SKT WIFI 모듈 공급", highlight: false },
        { text: "10월 LTE-M 마을방송 단말기 출시", highlight: false },
      ],
    },
    {
      year: "2017",
      events: [
        { text: "01월 KT 개인통합보안 단말기 QAT 통과", highlight: false },
        {
          text: "02월 삼성전자-베트남공장 차량 위치 관리 단말기 공급",
          highlight: false,
        },
        { text: "03월 만도 전기자전거 LTE-M 단말기 공급", highlight: false },
        { text: "04월 디지털 마을방송 시스템 출시", highlight: false },
      ],
    },
    {
      year: "2018",
      events: [
        { text: "04월 베트남-호치민 현지 연구소 설립", highlight: false },
        {
          text: "08월 SKT 실내 공기질 측정 단말기 출시",
          highlight: false,
        },
        { text: "10월 과학화훈련장 KM100/KM2000 규격 승인", highlight: false },
        { text: "11월 라돈 측정기 개발 및 공급", highlight: false },
      ],
    },
    {
      year: "2019",
      events: [
        { text: "06월 RISC-V 기반 센서 SoC 플랫폼 출시", highlight: false },
        {
          text: "08월 ADT 캡스 도어뷰 응급 버튼(AWS) 공급",
          highlight: false,
        },
        { text: "10월 BLE/지그비 통합 비콘 제품 출시", highlight: false },
        { text: "12월 BMS 무선 솔루션 개발", highlight: false },
      ],
    },
    {
      year: "2020",
      events: [
        { text: "02월 예비군훈련장 WPAN 무선 체계 납품", highlight: false },
        {
          text: "04월 5GHz/10GHz AI Radar 제품 출시",
          highlight: false,
        },
        { text: "10월 과학화훈련장 KM100/KM2000 규격 승인", highlight: false },
        { text: "12월 UWB RFIC 전문 기업 - 실리콘 R&D 인수", highlight: false },
      ],
    },

    {
      year: "2021",
      events: [
        { text: "06월 COVID-19, 백신 Data Logger 공급", highlight: false },
        { text: "12월 베트남 하노이 자회사(wavelet) 설립", highlight: false },
      ],
    },
  ];

  return (
    <div>
      <div
        className="history-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        ABOUT US &gt; <span style={{ color: "navy" }}>연혁</span>
      </div>

      <div className="title-history" style={{ ...titleHistoryStyle }}>
        <table style={bodyContainerStyle}>
          <tbody>
            {splitIntoRows(data.reverse(), 2).map((row, rowIndex) => (
              <tr key={rowIndex} style={tableRowStyle}>
                {row.map((item, index) => (
                  <React.Fragment key={index}>
                    <td style={yearCellStyle}>
                      <b>{item.year}</b>
                    </td>
                    <td style={contentCellStyle}>
                      {item.events.map((event, i) => (
                        <div key={i}>
                          <span
                            style={{
                              color: event.highlight ? "red" : "inherit",
                            }}
                          >
                            {event.text}
                          </span>
                        </div>
                      ))}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
