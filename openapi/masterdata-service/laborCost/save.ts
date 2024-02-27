import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工费相关/saveUsingPOST_3
*/
export default function fetchMethod(options: { data: ILaborCostsSaveDTO }, extraOptions?: any) {
    return http<IJSONResultLaborResponseObject>(
        {
            url: "/masterdata-service/laborCost/save",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工费保存DTO */
export interface ILaborCostsSaveDTO {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name: string;
    /** 关联工序id */
    processIds: string[];
    /** 关联物料id */
    materialIds: string[];
    /** 合格产出工费单价（元） */
    producePrice?: number;
    /** 返工产出工费单价（元） */
    backProducePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
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
    ts?: string;
}
/** 工费响应对象 */
export interface ICostResponseObject {
    /** id */
    id?: string;
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
    id?: string;
    /** 显示字段名称 */
    showFieldValue?: string;
}
