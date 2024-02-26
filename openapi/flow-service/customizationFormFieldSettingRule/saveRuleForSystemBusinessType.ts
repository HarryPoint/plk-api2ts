import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/定制表单字段设置规则 - 相关/saveRuleForSystemBusinessTypeUsingPOST
*/
export default function fetchMethod(options: { data: IFlowTableLocateTheGroupFlowIdEditTheDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/customizationFormFieldSettingRule/saveRuleForSystemBusinessType",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程表格列定位分组流程id编辑DTO */
export interface IFlowTableLocateTheGroupFlowIdEditTheDTO {
    /** 左侧固定表格列 */
    leftFixColumns?: IProcessTableColumnEditDTO[];
    /** 不固定表格列 */
    normalFixColumns?: IProcessTableColumnEditDTO[];
    /** 系统类型 */
    systemType?: string;
    /** 右侧固定表格列 */
    rightFixColumns?: IProcessTableColumnEditDTO[];
    /** 功能编码 */
    formFunction?: string;
}
/** 流程表格列编辑DTO */
export interface IProcessTableColumnEditDTO {
    /** id */
    id: number;
    /** 是否显示，控制配置表单是否显示 */
    isShow: string;
    /** 子集 */
    children: IProcessTableColumnEditDTO[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
