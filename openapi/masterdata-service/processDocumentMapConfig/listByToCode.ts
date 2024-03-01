import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺文档映射配置/listByToCodeUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; ToCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessDocumentMapConfigurationVO>(
        {
            url: "/masterdata-service/processDocumentMapConfig/listByToCode",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺文档映射配置VO»» */
export interface IJSONResultListProcessDocumentMapConfigurationVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessDocumentMappingConfigurationVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺文档映射配置VO */
export interface IProcessDocumentMappingConfigurationVO {
    /** 来源字段编码 */
    fromFieldCode?: string;
    /** 来源字段序列号 */
    fromFieldSerialNo?: string;
    /** 来源应用编码 */
    fromFlowPathCode?: string;
    /** 映射到应用编码 */
    toCode?: string;
    /** 映射到字段编码 */
    toFieldCode?: string;
    /** 映射到字段序列号 */
    toFieldSerialNo?: string;
}
