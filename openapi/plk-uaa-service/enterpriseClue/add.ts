import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/客户线索相关/addUsingPOST_5
*/
export default function fetchMethod(data: ICustomerLeadsAddRequestObject, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterpriseClue/add",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 客户线索添加请求对象 */
export interface ICustomerLeadsAddRequestObject {
    /** 企业名称 */
    enterpriseName?: string;
    /** 省份编码 */
    provinceCode?: string;
    /** 市级编码 */
    cityCode?: string;
    /** 行业id */
    industryId?: number;
    /** 联系人姓名 */
    contactUserName?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 职位 */
    position?: string;
    /** 试用模块ids */
    trialModuleIds?: number[];
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
