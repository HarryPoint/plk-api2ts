import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/getEnterpriseEmployeeHasPermissionByFlowPathUsingGET
*/
export default function fetchMethod(options: { params: { FlowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultString>(
        {
            url: "/plk-uaa-service/saasAuth/getEnterpriseEmployeeHasPermissionByFlowPath",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString_data {
    Y = "Y",
    N = "N"
}
