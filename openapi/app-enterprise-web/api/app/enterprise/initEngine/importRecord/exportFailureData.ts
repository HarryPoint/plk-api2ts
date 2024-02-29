import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/exportFailureDataUsingPOST
*/
export default function fetchMethod(options: { data: IExportFailureDataRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/exportFailureData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ExportFailureDataRequestDTO */
export interface IExportFailureDataRequestDTO {
    /** 导入记录的ID */
    id?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
