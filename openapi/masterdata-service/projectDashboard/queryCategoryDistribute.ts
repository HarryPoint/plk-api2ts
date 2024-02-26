import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目大屏相关/queryCategoryDistributeUsingPOST
*/
export default function fetchMethod(data: IProjectKanbanQueryDto, extraOptions?: any) {
    return http<ITheJSONResultListProjectClassDistributesResponseObjects>(
        {
            url: "/masterdata-service/projectDashboard/queryCategoryDistribute",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 项目看板查询dto */
export interface IProjectKanbanQueryDto {
    /** 开始日期 */
    beginTime?: string;
    /** 结束日期 */
    endTime?: string;
    /** 项目大类 */
    projectCategory?: string;
    /** undefined */
    projectTypeIds?: number[];
    /** undefined */
    excludeProjectIds?: number[];
}
/** JSONResult«List«项目大类分布响应对象»» */
export interface ITheJSONResultListProjectClassDistributesResponseObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProjectClassDistributesTheResponseObjects[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目大类分布响应对象 */
export interface ITheProjectClassDistributesTheResponseObjects {
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目大类编号 */
    projectCategory?: string;
    /** 分布数量 */
    distributeQuantity?: number;
}
