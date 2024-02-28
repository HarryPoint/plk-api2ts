import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产进度统计报表 - 相关/saveFormFieldSortRuleUsingPOST
*/
export default function fetchMethod(options: { data: IProcessTableColumnLocationGroupEditDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceProgressStatistics/saveFormFieldSortRule",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程表格列定位分组编辑DTO */
export interface IProcessTableColumnLocationGroupEditDTO {
    /** 左侧固定表格列 */
    leftFixColumns?: IProcessTableColumnEditDTO[];
    /** 不固定表格列 */
    normalFixColumns?: IProcessTableColumnEditDTO[];
    /** 右侧固定表格列 */
    rightFixColumns?: IProcessTableColumnEditDTO[];
}
/** 流程表格列编辑DTO */
export interface IProcessTableColumnEditDTO {
    /** id */
    id: string;
    /** 是否显示，控制配置表单是否显示 */
    isShow: EProcessTableColumnEditDTO_isShow;
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
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProcessTableColumnEditDTO_isShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
