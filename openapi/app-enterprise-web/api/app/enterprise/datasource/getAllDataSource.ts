import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/打印数据源相关/getAllDataSourceUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListDataSourceResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/datasource/getAllDataSource",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«数据源响应对象»» */
export interface IJSONResultListDataSourceResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDataSourceResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 数据源响应对象 */
export interface IDataSourceResponseObject {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 数据源权限码 */
    pcode?: string;
    /** 数据源名称 */
    name?: string;
    /** 数据源类型 */
    dataSourceType?: string;
    /** 父级数据源id */
    parentId?: number;
    /** 应用流程id */
    flowPathId?: number;
    /** 应用流程状态 */
    flowPathDataStatus?: number;
    /** 是否主表 */
    isMaster?: string;
    /** 应用路由Id */
    enterpriseRouterId?: string;
    /** 应用路由code */
    enterpriseRouterPermissionCode?: string;
    /** 服务对象id */
    serviceObjectId?: number;
    /** 服务包类型 - 应用级别 */
    applicationLevel?: string;
    /** 子数据源 */
    childDataSources?: IDataSourceResponseObject[];
}
