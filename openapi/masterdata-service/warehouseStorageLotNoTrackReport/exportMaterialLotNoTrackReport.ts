import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/批次跟踪报表相关/exportMaterialLotNoTrackReportUsingPOST
*/
export default function fetchMethod(data: ExportMaterialLotNoTrackReport, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/warehouseStorageLotNoTrackReport/exportMaterialLotNoTrackReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
