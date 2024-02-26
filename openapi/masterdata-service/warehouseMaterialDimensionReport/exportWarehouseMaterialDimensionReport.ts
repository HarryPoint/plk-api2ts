import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料库存维度报表相关/exportWarehouseMaterialDimensionReportUsingPOST
*/
export default function fetchMethod(data: ExportWarehouseMaterialDimensionReport, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/warehouseMaterialDimensionReport/exportWarehouseMaterialDimensionReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
