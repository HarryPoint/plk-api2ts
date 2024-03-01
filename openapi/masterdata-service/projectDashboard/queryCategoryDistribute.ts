import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏相关/queryCategoryDistributeUsingPOST
*/
export default function fetchMethod(options: { data: IProjectKanbanQueryDto }, extraOptions?: any) {
    return http<ITheJSONResultListProjectClassDistributesResponseObjects>(
        {
            url: "/masterdata-service/projectDashboard/queryCategoryDistribute",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目看板查询dto */
export interface IProjectKanbanQueryDto {
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** undefined */
    excludeProjectIds?: string[];
    /** 项目大类 */
    projectCategory?: string;
    /** undefined */
    projectTypeIds?: string[];
}
/** JSONResult«List«项目大类分布响应对象»» */
export interface ITheJSONResultListProjectClassDistributesResponseObjects {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProjectClassDistributesTheResponseObjects[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目大类分布响应对象 */
export interface ITheProjectClassDistributesTheResponseObjects {
    /** 分布数量 */
    distributeQuantity?: number;
    /** 项目大类编号 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
}
