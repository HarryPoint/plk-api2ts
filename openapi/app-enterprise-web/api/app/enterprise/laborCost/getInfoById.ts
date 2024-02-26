import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工费相关/getInfoByIdUsingGET_2
*/
export default function fetchMethod(params: { id?: string }, extraOptions?: any) {
    return http<IJSONResultLaborResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/laborCost/getInfoById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«工费响应对象» */
export interface IJSONResultLaborResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICostResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工费响应对象 */
export interface ICostResponseObject {
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 合格产出工费单价（元） */
    producePrice?: number;
    /** 返工产出工费单价（元） */
    backProducePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: number;
    /** 显示字段名称 */
    showFieldValue?: string;
}
