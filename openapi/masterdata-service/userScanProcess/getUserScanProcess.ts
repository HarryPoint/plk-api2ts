import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工扫码报工工序相关/getUserScanProcessUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultUserScanProcessVO>(
        {
            url: "/masterdata-service/userScanProcess/getUserScanProcess",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«UserScanProcessVO» */
export interface IJSONResultUserScanProcessVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IUserScanProcessVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** UserScanProcessVO */
export interface IUserScanProcessVO {
    /** undefined */
    enterpriseId?: string;
    /** undefined */
    id?: string;
    /** undefined */
    processId?: string;
    /** undefined */
    userId?: string;
}
