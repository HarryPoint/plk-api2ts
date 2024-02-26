import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/物料收发汇总报表相关/exportMaterialStorageInOutReportUsingPOST
*/
export default function fetchMethod(options: { data: ExportMaterialStorageInOutReport }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseMaterialStorageInOutReport/exportMaterialStorageInOutReport",
            method: "post",
            ...options,
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
