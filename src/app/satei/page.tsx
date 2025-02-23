import type { Metadata } from "next";
import dynamic from "next/dynamic";


const Inquiry = dynamic(() => import("@/components/common/sections/Inquiry"));

// baseUrl
import { baseUrl } from '@/utils/baseUrl';

// metadata
export const metadata: Metadata = {
  title: "無料価格査定 ",
  description: "弊社にとって、お客様に納得して頂けるお見積を提供出来る事は何よりも大切です。査定額に満足出来ることこそが良い取引の必須条件です。そのため、弊社は一切査定料を請求することはありません。現地査定の場合はお客様と一緒に現物を見て買い取り価格を決め、ご納得して頂ければその場でお支払いさせて頂きます。電話やメールでのお問い合わせの場合はお客様から頂く情報をもとにお見積もりを作成させて頂いてますが、最終査定は実際に商品を見て行わせて頂きます。是非とも正確な情報を共有し、お互いに納得出来る取引を目指したく思います",
  keywords: "お問い合わせフォーム,その他のご連絡事項,見積もりは無料です。",
  alternates: {
    canonical: `${baseUrl}/satei`
  },
}

const page = () => {
  return <Inquiry />;
};

export default page;
