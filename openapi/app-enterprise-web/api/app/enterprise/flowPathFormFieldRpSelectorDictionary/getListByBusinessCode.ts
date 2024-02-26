import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/流程选项集字典相关/getListByBusinessCodeUsingGET
*/
export default function fetchMethod(options: { params: { businessCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessFormFieldAssociationDictionaryOptionSetVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathFormFieldRpSelectorDictionary/getListByBusinessCode",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程表单字段关联字典选项集VO»» */
export interface IJSONResultListProcessFormFieldAssociationDictionaryOptionSetVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessFormFieldAssociationDictionaryOptionSetVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程表单字段关联字典选项集VO */
export interface IProcessFormFieldAssociationDictionaryOptionSetVO {
    /** undefined */
    color?: string;
    /** undefined */
    name?: string;
    /** 预设名称 */
    presetName?: string;
    /** undefined */
    code?: string;
    /** 是否预设 */
    isPreset?: string;
    /** 能否修改 */
    isCanModify?: string;
    /** 能否删除 */
    isCanDelete?: string;
}
