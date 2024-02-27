import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/打印数据源相关/getAllDataSourceUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
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
    ts?: string;
}
/** 数据源响应对象 */
export interface IDataSourceResponseObject {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 数据源权限码 */
    pcode?: string;
    /** 数据源名称 */
    name?: string;
    /** 数据源类型 */
    dataSourceType?: EDataSourceResponseObject_dataSourceType;
    /** 父级数据源id */
    parentId?: string;
    /** 应用流程id */
    flowPathId?: string;
    /** 应用流程状态 */
    flowPathDataStatus?: number;
    /** 是否主表 */
    isMaster?: EDataSourceResponseObject_isMaster;
    /** 应用路由Id */
    enterpriseRouterId?: string;
    /** 应用路由code */
    enterpriseRouterPermissionCode?: string;
    /** 服务对象id */
    serviceObjectId?: string;
    /** 服务包类型 - 应用级别 */
    applicationLevel?: EDataSourceResponseObject_applicationLevel;
    /** 子数据源 */
    childDataSources?: IDataSourceResponseObject[];
}

export enum EDataSourceResponseObject_dataSourceType {
    /** 动态表单 */
    DYNAMIC_FORM = "DYNAMIC_FORM",
    /** 功能 */
    FUN = "FUN",
    /** 报表 */
    REPORT = "REPORT"
}

export enum EDataSourceResponseObject_isMaster {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDataSourceResponseObject_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}
