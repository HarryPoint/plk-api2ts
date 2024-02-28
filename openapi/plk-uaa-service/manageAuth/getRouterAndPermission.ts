import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/运营管理端授权相关/getRouterAndPermissionUsingPOST
*/
export default function fetchMethod(options: { data: IRouteQuery }, extraOptions?: any) {
    return http<IJSONResultOperationRoutePermissionResponseDTO>(
        {
            url: "/plk-uaa-service/manageAuth/getRouterAndPermission",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 路由查询 */
export interface IRouteQuery {
    /** 客户端组编码 */
    clientGroupCode?: string;
}
/** JSONResult«运营路由权限响应 DTO» */
export interface IJSONResultOperationRoutePermissionResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOperationRoutePermissionRespondsToTheDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 运营路由权限响应 DTO */
export interface IOperationRoutePermissionRespondsToTheDTO {
    /** 路由集 */
    routerList?: ITheRouteRespondsToTheDTO[];
    /** 权限码集 */
    permissionCodeList?: string[];
}
/** 路由响应 DTO */
export interface ITheRouteRespondsToTheDTO {
    /** id */
    id?: string;
    /** 客户端组编码 */
    clientGroupCode?: string;
    /** 所属权限编码 */
    permissionCode?: string;
    /** 父级路由id */
    parentId?: string;
    /** 父级路由编码 */
    parentCode?: string;
    /** 路由name */
    name?: string;
    /** 路由code */
    code?: string;
    /** 菜单类型 */
    type?: ETheRouteRespondsToTheDTO_type;
    /** 图标 */
    icon?: string;
    /** 路由排序 */
    level?: number;
    /** 路由排序 */
    sort?: number;
    /** 是否存在数据权限 */
    hasDataAuth?: ETheRouteRespondsToTheDTO_hasDataAuth;
    /** 路由配置 */
    config?: ITheRouteConfigurationRespondsToTheDTO;
    /** 应用级别 */
    applicationLevel?: ETheRouteRespondsToTheDTO_applicationLevel;
    /** 子集 */
    children?: ITheRouteRespondsToTheDTO[];
}
/** 路由配置响应 DTO */
export interface ITheRouteConfigurationRespondsToTheDTO {
    /** 菜单类型 */
    menuType?: ETheRouteConfigurationRespondsToTheDTO_menuType;
    /** 应用配置 */
    appConfig?: IApplicationRouteConfigurationRespondsToTheDTO;
}
/** 应用路由配置响应 DTO */
export interface IApplicationRouteConfigurationRespondsToTheDTO {
    /** 系统应用类型 */
    appSystemType?: string;
}

export enum ETheRouteRespondsToTheDTO_type {
    GROUP = "GROUP",
    PAGE = "PAGE"
}

export enum ETheRouteRespondsToTheDTO_hasDataAuth {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheRouteRespondsToTheDTO_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum ETheRouteConfigurationRespondsToTheDTO_menuType {
    /** 应用 */
    APP = "APP",
    /** 外部报表 */
    REPORT_EXTERNAL = "REPORT_EXTERNAL"
}
