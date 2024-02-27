import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺文档映射配置/listAllProcessDocumentUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessDocumentVO>(
        {
            url: "/masterdata-service/processDocumentMapConfig/listAllProcessDocument",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺文档VO»» */
export interface IJSONResultListProcessDocumentVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessDocumentationVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺文档VO */
export interface IProcessDocumentationVO {
    /** 文档编号 */
    code?: string;
    /** 文档名称 */
    name?: string;
    /** 展示模块 */
    displayModuleEnum?: EProcessDocumentationVO_displayModuleEnum;
    /** 是否在大屏上展示 */
    isDisplayEnum?: EProcessDocumentationVO_isDisplayEnum;
    /** 展示模块 -- 字符串 */
    displayModule?: string;
    /** 是否在大屏上展示 -- 字符串 */
    isDisplay?: string;
    /** 排序 */
    sort?: number;
    /** 适用物料ids */
    applyMaterialIdList?: string[];
    /** 适用物料名称列表 */
    applyMaterialNameList?: string[];
    /** 适用车间ids */
    applyAreaIdList?: string[];
    /** 适用工序ids */
    applyProcessIdList?: string[];
    /** 文档内容 */
    content?: string;
}

export enum EProcessDocumentationVO_displayModuleEnum {
    /** 不良品示例 */
    BAD_PRODUCT = "BAD_PRODUCT",
    /** 包装作业指导书 */
    PACKAGE_WORK = "PACKAGE_WORK",
    /** 生产作业指导书 */
    PRODUCE_WORK = "PRODUCE_WORK"
}

export enum EProcessDocumentationVO_isDisplayEnum {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
