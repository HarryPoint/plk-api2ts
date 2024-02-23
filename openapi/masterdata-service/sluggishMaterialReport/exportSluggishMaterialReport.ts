import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/呆滞物料分析报表相关/exportSluggishMaterialReportUsingPOST
export default function fetchMethod(data: ExportSluggishMaterialReport) {
    return post<IJSONResultlong>({
      url: "/masterdata-service/sluggishMaterialReport/exportSluggishMaterialReport",
      data,
    });
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
