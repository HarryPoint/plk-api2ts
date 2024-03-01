import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/modifyUsingPOST_5
*/
export default function fetchMethod(options: { data: ITheEnterpriseModifiesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/enterprise/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业修改请求对象 */
export interface ITheEnterpriseModifiesTheRequestObject {
    /** 管理员手机号 */
    adminPhone?: string;
    /** 交付经理用户ids */
    deliveryManagerUserIdArray?: string[];
    /** 专家ids */
    expertUserIdArray?: string[];
    /** 企业id */
    id?: string;
    /** 企业名 */
    name?: string;
    /** 销售经理ids */
    salesManagerUserIdArray?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
