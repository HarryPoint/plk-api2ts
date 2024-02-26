import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/慧博工艺文档大屏相关/getDashboardUsingPOST
*/
export default function fetchMethod(options: { data: IProcessDocumentLargeScreenQueryDTO }, extraOptions?: any) {
    return http<IJSONResultProcessDocumentLargeScreenResultVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/huibo/processDocumentDashboard/getDashboard",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺文档大屏查询DTO */
export interface IProcessDocumentLargeScreenQueryDTO {
    /** 区域id */
    areaId: number;
    /** 工序id */
    processId: number;
}
/** JSONResult«工艺文档大屏结果VO» */
export interface IJSONResultProcessDocumentLargeScreenResultVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessDocumentLargeScreenResultsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工艺文档大屏结果VO */
export interface IProcessDocumentLargeScreenResultsVO {
    /** 不良品示例 列表 */
    badProductItemList?: IProcessDocumentLargeScreenForEachDocumentResultsVO[];
    /** 包装作业指导书 列表 */
    packageWorkItemList?: IProcessDocumentLargeScreenForEachDocumentResultsVO[];
    /** 生产作业指导书 列表 */
    produceWorkItemList?: IProcessDocumentLargeScreenForEachDocumentResultsVO[];
}
/** 工艺文档大屏每一个文档的结果VO */
export interface IProcessDocumentLargeScreenForEachDocumentResultsVO {
    /** 文档编号 */
    documentCode?: string;
    /** 文档名称 */
    documentName?: string;
    /** 适用物料名称列表 */
    applyMaterialNameList?: string[];
    /** 文档内容 */
    content?: string;
    /** 文档排序 */
    sort?: number;
}
