import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/流程数据相关/queryAssociationFormDataInCascadeModeUsingPOST
*/
export default function fetchMethod(options: { data: IFormCascadeQueryConditionVO }, extraOptions?: any) {
    return http<IJSONResultListFormCascadeQueryResultVO>(
        {
            url: "/app-mobile-web/api/app/mobile/flowPathData/associationFormData/cascadeMode/query",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FormCascadeQueryConditionVO */
export interface IFormCascadeQueryConditionVO {
    /** 搜索名称 */
    globalSearch?: string;
    /** 当前表单字段ID */
    flowPathFormFieldId?: number;
    /** 当前表单选择的数据 */
    submitFieldsJsonObject?: Record<string, Record<string, any>>;
    /** 来自表单过滤条件 */
    fromFormFilterCondition?: ('Y' | 'N');
    /** 应用编码 */
    flowPathCode?: string;
    /** 字段序列号 */
    fieldSerialNo?: string;
}
/** JSONResult«List«FormCascadeQueryResultVO»» */
export interface IJSONResultListFormCascadeQueryResultVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFormCascadeQueryResultVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FormCascadeQueryResultVO */
export interface IFormCascadeQueryResultVO {
    /** id */
    id?: number;
    /** 显示名称/显示分组名称/处理人名称 */
    name?: string;
    /** 编码 */
    code?: string;
    /** 子集 */
    children?: IFormCascadeQueryResultVO[];
}
