export default {
  swagger: "2.0",
  info: {
    description: "服务名: app-enterprise-web",
    version: "1.0",
    title: "普朗克企业后台(app-enterprise-web) API接口",
  },
  host: "47.108.139.107:16400",
  basePath: "/",
  schemes: [],
  consumes: ["*/*"],
  produces: ["*/*"],
  paths: {
    "/app-enterprise-web/api/app/enterprise/saleAssist/compute": {
      post: {
        tags: ["02-01-02-销售交期应答辅助相关"],
        summary: "计算销售交期应答辅助",
        operationId: "computeUsingPOST",
        consumes: ["application/json"],
        produces: ["*/*"],
        parameters: [
          {
            in: "body",
            name: "compute",
            description: "compute",
            required: true,
            schema: {
              originalRef: "销售交期应答辅助计算DTO",
              $ref: "#/definitions/销售交期应答辅助计算DTO",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              originalRef: "JSONResult«销售交期应答辅助返回VO»",
              $ref: "#/definitions/JSONResult«销售交期应答辅助返回VO»",
            },
          },
          201: {
            description: "Created",
          },
          401: {
            description: "Unauthorized",
          },
          403: {
            description: "Forbidden",
          },
          404: {
            description: "Not Found",
          },
        },
        deprecated: false,
        "x-order": "30",
      },
    },
  },
  definitions: {
    销售交期应答辅助计算DTO: {
      type: "object",
      required: ["beginTime", "count", "isHighest", "materialId"],
      properties: {
        materialId: {
          type: "integer",
          format: "int64",
          description: "物料id",
          refType: null,
        },
        routingId: {
          type: "integer",
          format: "int64",
          description: "生产工艺路径id",
          refType: null,
        },
        count: {
          type: "number",
          description: "数量, 只能输入正数，可以有小数点，小数点后2位",
          refType: null,
        },
        beginTime: {
          type: "string",
          description: "排产开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00",
          refType: null,
        },
        isHighest: {
          type: "string",
          description: "是否优先级最高",
          enum: ["  Y-是", "  N-否"],
          refType: null,
        },
        designBeginTime: {
          type: "string",
          description: "设计开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00",
          refType: null,
        },
        designEndTime: {
          type: "string",
          description: "设计结束时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00",
          refType: null,
        },
        purchaseBeginTime: {
          type: "string",
          description: "采购开始时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00",
          refType: null,
        },
        purchaseEndTime: {
          type: "string",
          description: "采购结束时间 yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00",
          refType: null,
        },
      },
      title: "销售交期应答辅助计算DTO",
    },
    "JSONResult«销售交期应答辅助返回VO»": {
      type: "object",
      properties: {
        code: {
          type: "integer",
          format: "int32",
          example: 0,
          description: "返回码",
        },
        msg: {
          type: "string",
          example: "服务器异常",
          description: "返回消息说明",
        },
        data: {
          description: "响应结果",
          originalRef: "销售交期应答辅助返回VO",
          $ref: "#/definitions/销售交期应答辅助返回VO",
        },
        ts: {
          type: "integer",
          format: "int64",
          example: 1356019200000,
          description: "服务器结果返回时的 Unix timestamp,单位毫秒",
        },
      },
      title: "JSONResult«销售交期应答辅助返回VO»",
    },
    销售交期应答辅助返回VO: {
      type: "object",
      properties: {
        materialInfo: {
          description: "主物料信息",
          originalRef: "销售交期应答辅助物料返回VO",
          $ref: "#/definitions/销售交期应答辅助物料返回VO",
          refType: "销售交期应答辅助物料返回VO",
        },
        childMaterialInfos: {
          type: "array",
          description: "子物料信息集",
          items: {
            originalRef: "销售交期应答辅助物料返回VO",
            $ref: "#/definitions/销售交期应答辅助物料返回VO",
          },
          refType: "销售交期应答辅助物料返回VO",
        },
        leadTime: {
          type: "string",
          format: "date-time",
          description: "预计整体交付时间",
          refType: null,
        },
        designCompleteTime: {
          type: "string",
          format: "date-time",
          description: "设计完成时间",
          refType: null,
        },
        purchaseCompleteTime: {
          type: "string",
          format: "date-time",
          description: "采购完成时间",
          refType: null,
        },
      },
      title: "销售交期应答辅助返回VO",
    },
    销售交期应答辅助物料返回VO: {
      type: "object",
      properties: {
        materialId: {
          type: "integer",
          format: "int64",
          description: "id",
          refType: null,
        },
        materialName: {
          type: "string",
          description: "物料名称",
          refType: null,
        },
        materialCode: {
          type: "string",
          description: "物料编号",
          refType: null,
        },
        routingId: {
          type: "integer",
          format: "int64",
          description: "工艺路径id",
          refType: null,
        },
        materialStorageCount: {
          type: "number",
          description: "物料库存数",
          refType: null,
        },
        demandCount: {
          type: "number",
          description: "需求数量",
          refType: null,
        },
        allowanceCount: {
          type: "number",
          description:
            "余量， 注：如果是正数，则显示 余量：xxx，  如果是负数，则显示 还需：xxx",
          refType: null,
        },
        isSetCapacity: {
          type: "string",
          description: "是否完整配置了产能信息",
          enum: ["  Y-是", "  N-否"],
          refType: null,
        },
        capacityWarning: {
          type: "string",
          description: "产能信息异常描述",
          refType: null,
        },
        childMaterialInfos: {
          type: "array",
          description: "子物料信息集",
          items: {
            originalRef: "销售交期应答辅助物料返回VO",
            $ref: "#/definitions/销售交期应答辅助物料返回VO",
          },
          refType: "销售交期应答辅助物料返回VO",
        },
      },
      title: "销售交期应答辅助物料返回VO",
    },
  },
};
