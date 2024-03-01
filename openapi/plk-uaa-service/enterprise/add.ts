import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/addUsingPOST_6
*/
export default function fetchMethod(options: { data: ITheEnterpriseAddedARequestObject }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/plk-uaa-service/enterprise/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业新增请求对象 */
export interface ITheEnterpriseAddedARequestObject {
    /** 管理员手机号 */
    adminPhone?: string;
    /** 交付经理用户ids */
    deliveryManagerUserIdArray?: string[];
    /** 专家ids */
    expertUserIdArray?: string[];
    /** 企业名 */
    name?: string;
    /** 销售经理ids */
    salesManagerUserIdArray?: string[];
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
