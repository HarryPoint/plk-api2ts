import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/路由相关/modifyUsingPOST_10
*/
export default function fetchMethod(options: { data: IModifyTheRouteDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/router/modify",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 路由修改 DTO */
export interface IModifyTheRouteDTO {
    /** 应用级别 */
    applicationLevel?: EModifyTheRouteDTO_applicationLevel;
    /** 客户端组编码 */
    clientGroupCode: string;
    /** 路由code */
    code: string;
    /** 配置 */
    config?: IRouteConfigurationRequestsDTO;
    /** 是否存在数据权限 */
    hasDataAuth?: EModifyTheRouteDTO_hasDataAuth;
    /** 图标 */
    icon?: string;
    /** id */
    id?: string;
    /** 路由层级 */
    level?: number;
    /** 路由name */
    name: string;
    /** 父级路由编码 */
    parentCode?: string;
    /** 父级路由id */
    parentId?: string;
    /** 所属权限编码 */
    permissionCode: string;
    /** 路由排序 */
    sort?: number;
    /** 类型 */
    type?: EModifyTheRouteDTO_type;
}
/** 路由配置请求 DTO */
export interface IRouteConfigurationRequestsDTO {
    /** 应用配置 */
    appConfig?: IApplyTheRouteConfigurationRequestDTO;
    /** 菜单类型 */
    menuType?: ERouteConfigurationRequestsDTO_menuType;
}
/** 应用路由配置请求 DTO */
export interface IApplyTheRouteConfigurationRequestDTO {
    /** 系统应用类型 */
    appSystemType?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EModifyTheRouteDTO_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum EModifyTheRouteDTO_hasDataAuth {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EModifyTheRouteDTO_type {
    GROUP = "GROUP",
    PAGE = "PAGE"
}

export enum ERouteConfigurationRequestsDTO_menuType {
    /** 应用 */
    APP = "APP",
    /** 外部报表 */
    REPORT_EXTERNAL = "REPORT_EXTERNAL"
}
