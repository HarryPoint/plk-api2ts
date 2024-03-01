import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/queryAssociationFormDataInCascadeModeUsingPOST
*/
export default function fetchMethod(options: { data: IFormCascadeQueryConditionVO }, extraOptions?: any) {
    return http<IJSONResultListFormCascadeQueryResultVO>(
        {
            url: "/masterdata-service/dynamicData/associationFormData/cascadeMode/query",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** FormCascadeQueryConditionVO */
export interface IFormCascadeQueryConditionVO {
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 应用编码 */
    flowPathCode?: string;
    /** 当前表单字段ID */
    flowPathFormFieldId?: string;
    /** 来自表单过滤条件 */
    fromFormFilterCondition?: EFormCascadeQueryConditionVO_fromFormFilterCondition;
    /** 搜索名称 */
    globalSearch?: string;
    /** 当前表单选择的数据 */
    submitFieldsJsonObject?: Record<string, Record<string, any>>;
}
/** JSONResult«List«FormCascadeQueryResultVO»» */
export interface IJSONResultListFormCascadeQueryResultVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFormCascadeQueryResultVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FormCascadeQueryResultVO */
export interface IFormCascadeQueryResultVO {
    /** 子集 */
    children?: IFormCascadeQueryResultVO[];
    /** 编码 */
    code?: string;
    /** id */
    id?: string;
    /** 显示名称/显示分组名称/处理人名称 */
    name?: string;
}

export enum EFormCascadeQueryConditionVO_fromFormFilterCondition {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
