import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/客户线索相关/addUsingPOST_5
*/
export default function fetchMethod(options: { data: ICustomerLeadsAddRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/enterpriseClue/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 客户线索添加请求对象 */
export interface ICustomerLeadsAddRequestObject {
    /** 市级编码 */
    cityCode?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 联系人姓名 */
    contactUserName?: string;
    /** 企业名称 */
    enterpriseName?: string;
    /** 行业id */
    industryId?: string;
    /** 职位 */
    position?: string;
    /** 省份编码 */
    provinceCode?: string;
    /** 试用模块ids */
    trialModuleIds?: string[];
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
