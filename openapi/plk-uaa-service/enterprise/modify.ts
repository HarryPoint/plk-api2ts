import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业客户相关/modifyUsingPOST_5
*/
export default function fetchMethod(options: { data: ITheEnterpriseModifiesTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterprise/modify",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 企业修改请求对象 */
export interface ITheEnterpriseModifiesTheRequestObject {
    /** 企业名 */
    name?: string;
    /** 管理员手机号 */
    adminPhone?: string;
    /** 专家ids */
    expertUserIdArray?: number[];
    /** 销售经理ids */
    salesManagerUserIdArray?: number[];
    /** 交付经理用户ids */
    deliveryManagerUserIdArray?: number[];
    /** 企业id */
    id?: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
