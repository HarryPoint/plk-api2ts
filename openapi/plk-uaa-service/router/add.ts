import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/路由相关/editUsingPOST_1
*/
export default function fetchMethod(options: { data: ITheDTOWasAddedToTheRouteProcedure }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/router/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 路由新增 DTO */
export interface ITheDTOWasAddedToTheRouteProcedure {
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 所属权限编码 */
    permissionCode: string;
    /** 父级路由id */
    parentId?: string;
    /** 父级路由编码 */
    parentCode?: string;
    /** 路由name */
    name: string;
    /** 路由code */
    code: string;
    /** 类型 */
    type?: ETheDTOWasAddedToTheRouteProcedure_type;
    /** 图标 */
    icon?: string;
    /** 路由层级 */
    level?: number;
    /** 路由排序 */
    sort?: number;
    /** 是否存在数据权限 */
    hasDataAuth?: ETheDTOWasAddedToTheRouteProcedure_hasDataAuth;
    /** 配置 */
    config?: IRouteConfigurationRequestsDTO;
    /** 应用级别 */
    applicationLevel?: ETheDTOWasAddedToTheRouteProcedure_applicationLevel;
}
/** 路由配置请求 DTO */
export interface IRouteConfigurationRequestsDTO {
    /** 菜单类型 */
    menuType?: ERouteConfigurationRequestsDTO_menuType;
    /** 应用配置 */
    appConfig?: IApplyTheRouteConfigurationRequestDTO;
}
/** 应用路由配置请求 DTO */
export interface IApplyTheRouteConfigurationRequestDTO {
    /** 系统应用类型 */
    appSystemType?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ETheDTOWasAddedToTheRouteProcedure_type {
    GROUP = "GROUP",
    PAGE = "PAGE"
}

export enum ETheDTOWasAddedToTheRouteProcedure_hasDataAuth {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheDTOWasAddedToTheRouteProcedure_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum ERouteConfigurationRequestsDTO_menuType {
    /** 应用 */
    APP = "APP",
    /** 外部报表 */
    REPORT_EXTERNAL = "REPORT_EXTERNAL"
}
